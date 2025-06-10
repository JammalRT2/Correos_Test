// apps/backend/src/entities/orden-producto.entity.ts
// apps/backend/src/entities/orden-producto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Orden } from './orden.entity';
import { Producto } from './producto.entity';

@Entity('orden_productos')
export class OrdenProducto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Orden, o => o.productos, { onDelete: 'CASCADE' })
  orden: Orden;

  @ManyToOne(() => Producto, p => p.ordenesProducto)
  producto: Producto;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  precio_unitario: number;
}