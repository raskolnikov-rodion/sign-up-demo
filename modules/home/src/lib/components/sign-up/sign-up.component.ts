import { AsyncPipe, NgIf } from '@angular/common';
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
import { TranslateModule } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { CustomerData, SignUpService } from '../../services/sign-up.service';
import { SignUpStateComponent } from './sign-up-state/sign-up-state.component';
import { SIGNUP_STATE } from './sign-up.models';

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
    MatButtonModule,
    SignUpStateComponent,
    TranslateModule,
  ],
})
export class SignUpComponent {
  @ViewChild(FormGroupDirective) formDirective: FormGroupDirective | undefined;

  readonly form = inject(FormBuilder).group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  private readonly service = inject(SignUpService);

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
