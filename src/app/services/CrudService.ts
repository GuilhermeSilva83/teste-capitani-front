import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IEntity, OperationResult } from '../model';

export class CrudService<TEntity extends IEntity> {

    url: string;
    constructor(protected http: HttpClient, protected path: string) {
        this.url = environment.apiUrl + this.path;
    }

    public async Save(e: TEntity): Promise<OperationResult<TEntity>> {
        if (e.id) {
            return await this.http.put<OperationResult<TEntity>>(this.url + "/" + e.id.toString(), e).toPromise();
        }
        else {
            return await this.http.post<OperationResult<TEntity>>(this.url, e).toPromise();
        }
    }

    public async DeleteById(id): Promise<OperationResult<any>> {
        return await this.http.delete<OperationResult<any>>(this.url + "/" + id.toString()).toPromise();
    }


    public async GetById(id): Promise<TEntity> {
        return await this.http.get<TEntity>(this.url + "/" + id.toString()).toPromise();
    }

    public async List(): Promise<TEntity[]> {
        return await this.http.get<TEntity[]>(this.url).toPromise();
    }

}

