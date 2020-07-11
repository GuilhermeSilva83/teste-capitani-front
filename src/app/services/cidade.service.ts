import { Injectable } from '@angular/core';
import { Tipo, Cidade } from '../model';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './CrudService';

@Injectable({
  providedIn: 'root'
})
export class CidadeService extends CrudService<Tipo>{
  constructor(protected http: HttpClient) {
    super(http, "api/cidade");
  }


  public async ListarPorEstado(estadoId: number): Promise<Cidade[]> {
    return await this.http.get<Cidade[]>(this.GetPath("por-estado/" + estadoId.toString())).toPromise();
  }


} 
