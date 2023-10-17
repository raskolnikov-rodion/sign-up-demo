import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './app.interceptor';

export const httpInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
];
