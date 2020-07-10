import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CrudService } from './CrudService';
import { Pessoa } from '../model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService extends CrudService<Pessoa>{

  constructor(protected http: HttpClient) {
    super(http, "api/pessoa");
  }
}
