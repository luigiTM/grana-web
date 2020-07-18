import { PessoaDTO } from './pessoa.dto';

export interface GastoPessoaDTO{
    id : String,
    percentualGasto : String,
    valor : String,
    pessoa : PessoaDTO
}