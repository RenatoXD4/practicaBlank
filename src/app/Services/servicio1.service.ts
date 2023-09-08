import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor() { 
    const tableuser: string = 'create table usuario(nombre varchar2(100));';
  }
}
