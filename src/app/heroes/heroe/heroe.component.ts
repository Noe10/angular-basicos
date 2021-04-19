import { Component, enableProdMode } from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = "Tony Star";
    heroe: string = "Iroman";
    edad  : number = 23;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }
    obtenerNombre(){
        return `${this.nombre} - ${this.edad}`
    }
    
    cambiarNombre():void{
        this.nombre= "Peter Parker"
        this.heroe = "Spiderman"
    }
    cambiarEdad():void{
        this.edad= 20
    }
}