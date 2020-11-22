import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado.component';
import { FormsModule } from '@angular/forms';
import { NombrePipe } from '../pipes/nombre.pipe';
import { NombreDirectivaDirective } from '../directivas/nombre-directiva.directive';



@NgModule({
  declarations: [ListadoComponent,NombrePipe,NombreDirectivaDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ListadoComponent]
})
export class ListadoModule { }
