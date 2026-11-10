import { Component, input } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { Etiqueta } from '../../shared/etiqueta/etiqueta';

@Component({
  selector: 'app-tarjeta-mascota',
  imports: [Etiqueta],
  templateUrl: './tarjeta-mascota.html',
  styleUrl: './tarjeta-mascota.css'
})
export class TarjetaMascota {

  mascota = input.required<Mascota>();

  mostrarDescripcion = false;

  edadMascota(): number {
    const edad = this.mascota().edadMeses;

  if (edad < 13) {
  return edad;
  }
  return Math.floor(edad / 12)};
  
  alternarDescripcion(): void {
    this.mostrarDescripcion = !this.mostrarDescripcion;
  }

  estaDisponible(): boolean {
    return this.mascota().adopcion;
  }
}