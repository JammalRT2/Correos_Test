// apps/backend/src/entities/producto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Carrito } from './carrito.entity';
import { Favorito } from './favorito.entity';
import { OrdenProducto } from './orden-producto.entity';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  @Column({ type: 'text', nullable: false })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  precio: number;

  @Column({ type: 'text', nullable: false })
  imagen_url: string;

  @Column({ type: 'varchar', nullable: false })
  categoria: string;

  @OneToMany(() => Carrito, c => c.producto) carrito: Carrito[];
  @OneToMany(() => Favorito, f => f.producto) favoritos: Favorito[];
  @OneToMany(() => OrdenProducto, op => op.producto) ordenesProducto: OrdenProducto[];
}