import { NgSwitch, NgSwitchCase } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { SIGNUP_STATE } from '../sign-up.models';

@Component({
  standalone: true,
  selector: 'gus-sign-up-state',
  templateUrl: './sign-up-state.component.html',
  styleUrls: ['./sign-up-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgSwitch, NgSwitchCase, MatProgressSpinnerModule, TranslateModule],
})
export class SignUpStateComponent {
  @Input() state: SIGNUP_STATE = SIGNUP_STATE.WAITING_SUBMISSION;

  readonly SIGNUP_STATE = SIGNUP_STATE;
}
