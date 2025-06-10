import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carrito } from './carrito.entity';
import { Favorito } from './favorito.entity';
import { OrdenProducto } from './orden-producto.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  nombre: string;

  @Column('text')
  descripcion: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column({ length: 100 })
  categoria: string;

  @Column('text')
  imagen_url: string;

  @OneToMany(() => Carrito, c => c.producto) carrito: Carrito[];
  @OneToMany(() => Favorito, f => f.producto) favoritos: Favorito[];
  @OneToMany(() => OrdenProducto, op => op.producto) ordenesProducto: OrdenProducto[];
}