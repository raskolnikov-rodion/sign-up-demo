import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'gus-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly translate = inject(TranslateService);

  ngOnInit() {
    this.setupLanguage();
  }

  private setupLanguage() {
    this.translate.setDefaultLang('en-US');
  }
}
