import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  heroes : string[] = ['La mujer maravilla', 'Spiderman', 'Superman', 'Iroman']
  heroeBorrado:string = "";
  borrarHeroe() {
     this.heroeBorrado = this.heroes.shift() || undefined
  }
}
