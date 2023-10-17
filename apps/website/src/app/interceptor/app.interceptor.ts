import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes('/api/signup')) {
      return of(
        new HttpResponse({
          status: 200,
        })
      ).pipe(delay(3000));
    }
    return next.handle(req);
  }
}
