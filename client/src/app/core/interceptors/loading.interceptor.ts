import { inject, Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';

import { BusyService } from '@core/service/busy.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  #busyService = inject(BusyService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.#busyService.busy();

    return next.handle(request).pipe(
      delay(1000),
      finalize(() => this.#busyService.idle())
    );
  }
}
