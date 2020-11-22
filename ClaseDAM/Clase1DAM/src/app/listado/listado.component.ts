import { Component, OnInit } from '@angular/core';
import { ListadoService } from '../services/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  variable:string="hola"

  variableSrcImagen:string="asd"
  nombre:string="Federico"
  apellido:string="Montes de Oca"

  estaHabilitado:boolean=true;

  miArray=[1,2,3,4,5,6]
  listado;
  
  constructor(public listadoServ:ListadoService) { 
    console.log(this.listadoServ.getDispositivos());
    this.listado=this.listadoServ.getDispositivos();
  
  }

  ngOnInit(): void {
  }

  clickEnBoton(algo){
    console.log("hice click en el boton")
    console.log(this.nombre);
    console.log(this.apellido);
    //this.nombre="FEDE";
    //this.apellido="FERNANDEZ";
  }
  cambiar(){
    console.log(this.estaHabilitado);
    this.estaHabilitado=!this.estaHabilitado;
    console.log("lo cambio por: " + this.estaHabilitado);
  }

}
