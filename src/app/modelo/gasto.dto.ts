import { GastoPessoaDTO } from './gasto_pessoa.dto';

export interface GastoDTO{
    grana : String,
    tipo : String,
    valor : String,
    dataGasto : String
    gastosPessoas : GastoPessoaDTO[]
}