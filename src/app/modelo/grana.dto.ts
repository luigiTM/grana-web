import { GastoDTO } from './gasto.dto';

export interface GranaDTO{
    id : String,
    nome : String,
    usuario : String,
    codigoDeAcesso : String,
    modificadoEm : String,
    gastos : GastoDTO[]
}