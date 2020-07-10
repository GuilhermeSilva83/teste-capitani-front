import { Injectable } from '@angular/core';
import { Tipo } from '../model';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './CrudService';

@Injectable({
  providedIn: 'root'
})

export class EstadoService extends CrudService<Tipo>{
  constructor(protected http: HttpClient) {
    super(http, "api/estado");
  }
}


