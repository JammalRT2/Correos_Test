// apps/backend/src/entities/producto.entity.ts
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

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ length: 50 })
  color: string;

  @Column({ length: 10 })
  talla: string;

  @Column({ type: 'text' })
  imagen_url: string;

  @OneToMany(() => Carrito, c => c.producto) carrito: Carrito[];
  @OneToMany(() => Favorito, f => f.producto) favoritos: Favorito[];
  @OneToMany(() => OrdenProducto, op => op.producto) ordenesProducto: OrdenProducto[];
}
