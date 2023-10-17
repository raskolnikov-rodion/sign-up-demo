import { HttpClientModule } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import { httpInterceptorProvider } from './interceptor/http-interceptor.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
    ...(isDevMode() ? [] : httpInterceptorProvider),
  ],
};
