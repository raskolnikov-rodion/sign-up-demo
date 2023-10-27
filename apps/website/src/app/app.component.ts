import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageToggleComponent } from './components/language-toggle/language-toggle.component';
import { LANGUAGES } from './components/language-toggle/language.model';

@Component({
  standalone: true,
  imports: [RouterModule, LanguageToggleComponent, TranslateModule],
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
    this.translate.addLangs([LANGUAGES.EN_US, LANGUAGES.PT_BR]);
    this.translate.setDefaultLang(LANGUAGES.EN_US);
  }

  onLanguageToggle() {
    this.translate.use(
      this.translate.currentLang === LANGUAGES.PT_BR
        ? LANGUAGES.EN_US
        : LANGUAGES.PT_BR
    );
  }
}
