import { NgIf } from '@angular/common';
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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CustomerData, SignUpService } from '../../services/sign-up.service';

@Component({
  standalone: true,
  selector: 'gus-sign-up',
  templateUrl: './sign-up.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
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

  onSubmit() {
    if (!this.form.valid) return;
    this.service.signUpCustomer(this.form.value as CustomerData).subscribe({
      next: () => this.onSignUpSuccess(),
    });
  }

  private onSignUpSuccess() {
    this.resetForm();
  }

  private resetForm() {
    this.form.reset();
    this.formDirective?.resetForm();
  }
}
