import { AsyncPipe, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
} from '@angular/core';
import {
  FormBuilder,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject } from 'rxjs';
import { CustomerData, SignUpService } from '../../services/sign-up.service';

enum SIGNUP_STATE {
  WAITING_SUBMISSION = 'WAITING_SUBMISSION',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

@Component({
  standalone: true,
  selector: 'gus-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    AsyncPipe,
    NgSwitch,
    NgSwitchCase,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class SignUpComponent {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective | undefined;

  readonly form = inject(FormBuilder).group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  private service = inject(SignUpService);

  private readonly _state$ = new BehaviorSubject<SIGNUP_STATE>(
    SIGNUP_STATE.WAITING_SUBMISSION
  );
  readonly state$ = this._state$.asObservable();
  readonly SIGNUP_STATE = SIGNUP_STATE;

  onSubmit() {
    if (!this.form.valid) return;
    this._state$.next(SIGNUP_STATE.LOADING);
    this.service.signUpCustomer(this.form.value as CustomerData).subscribe({
      next: () => this.onSignUpSuccess(),
      error: () => this.onSignUpError(),
    });
  }

  private onSignUpSuccess() {
    this.resetForm();
    this._state$.next(SIGNUP_STATE.SUCCESS);
    setTimeout(() => {
      this._state$.next(SIGNUP_STATE.WAITING_SUBMISSION);
    }, 5000);
  }

  private resetForm() {
    this.form.reset();
    this.formDirective?.resetForm();
  }

  private onSignUpError() {
    this._state$.next(SIGNUP_STATE.ERROR);
  }
}
