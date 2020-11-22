import { Injectable } from '@angular/core';
import { Dispositivo } from '../model/dispositivo';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  listadoDispositivo:Dispositivo[]=[{
    nombre:"Dispositivo 1",
    ubicacion:"Cocina"
  },
  {
    nombre:"Dispositivo 2",
    ubicacion:"Living"
}];
  constructor() { }

  getDispositivos(){
    return this.listadoDispositivo;
  }


}
