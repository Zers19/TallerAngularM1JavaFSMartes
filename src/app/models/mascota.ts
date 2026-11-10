export type Mascotas = 'Nombre' | 'Especie' | 'Edad' | 'Adopción' ;

export interface Mascota {
  id: number;
  nombre: string;
  especie: 'Perro' | 'Gato';
  edadMeses: number;
  adopcion: boolean;
  descripcion: string;
}