import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { LANGUAGES } from './components/language-toggle/language.model';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterTestingModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onLanguageToggle', () => {
    it('should toggle language', () => {
      const translate = TestBed.inject(TranslateService);
      jest.spyOn(translate, 'use');
      component.onLanguageToggle();
      expect(translate.use).toHaveBeenCalledTimes(1);
      expect(translate.use).toHaveBeenCalledWith(LANGUAGES.PT_BR);
      component.onLanguageToggle();
      expect(translate.use).toHaveBeenCalledTimes(2);
      expect(translate.use).toHaveBeenCalledWith(LANGUAGES.EN_US);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
