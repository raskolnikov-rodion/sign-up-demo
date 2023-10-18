import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  standalone: true,
  selector: 'gus-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignUpComponent],
})
export class HomeComponent {}
