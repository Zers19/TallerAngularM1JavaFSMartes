import { Component } from '@angular/core';
import { MASCOTAS } from '../../data/mascota.mock';
import { TarjetaMascota } from '../../components/tarjeta-mascota/tarjeta-mascota';

@Component({
  imports: [TarjetaMascota],
  selector: 'app-listado-mascotas',
  styleUrl: './listado-mascotas.css',
  templateUrl: './listado-mascotas.html',
})
export class ListadoMascotas {
  mascotas = MASCOTAS;
}