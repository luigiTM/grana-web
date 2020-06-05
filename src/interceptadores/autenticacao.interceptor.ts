import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArmazenamentoService } from 'src/app/servicos/armazenamento.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacaoInterceptador implements HttpInterceptor {

    constructor(private armazenamento: ArmazenamentoService) {

    }

    intercept(requisicao: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let usuarioLocal = this.armazenamento.getUsuarioLocal()
        if (usuarioLocal) {
            const requisicaoAutenticada = requisicao.clone({
                headers: requisicao.headers.set('Authorization', 'Bearer ' + usuarioLocal.token)
            })
            return next.handle(requisicaoAutenticada)
        } else {
            return next.handle(requisicao)
        }
    }
}

export const AutenticacaoInterceptadorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AutenticacaoInterceptador,
    multi: true
}