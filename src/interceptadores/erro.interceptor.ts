import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service/armazenamento.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ErroInterceptador implements HttpInterceptor {

    constructor(private armazenamento: ArmazenamentoService) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorObj = error
                    if (errorObj.error) {
                        errorObj = errorObj.error

                    }
                    if (!errorObj.status) {
                        errorObj = JSON.parse(errorObj.toString())
                    }
                    switch (errorObj.status) {
                        case 403:
                            this.armazenamento.setUsuarioLocal(null)
                            break

                        case 401:
                            window.alert("Erro de autenticação\n" + errorObj.message)
                            break

                        case 422:
                            
                            break
                    }
                    return throwError(errorObj);
                })
            )
    }

}

export const ErroInterceptadorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErroInterceptador,
    multi: true
}