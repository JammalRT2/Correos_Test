// apps/backend/src/entities/carrito.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Producto } from './producto.entity';

@Entity('carrito')
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, u => u.carrito, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @ManyToOne(() => Producto, p => p.carrito, { onDelete: 'CASCADE' })
  producto: Producto;

  @Column({ type: 'int', nullable: false })
  cantidad: number;

  @CreateDateColumn({ nullable: false })
  fecha_agregado: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  precio_unitario: number;

  @Column({ type: 'boolean', nullable: false })
  activo: boolean;
}