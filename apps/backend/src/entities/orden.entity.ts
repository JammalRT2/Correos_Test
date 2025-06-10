// apps/backend/src/entities/orden.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Direccion } from './direccion.entity';
import { Pago } from './pago.entity';
import { OrdenProducto } from './orden-producto.entity';

@Entity('ordenes')
export class Orden {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, u => u.ordenes)
  usuario: Usuario;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  total: number;

  @CreateDateColumn({ nullable: false })
  fecha_orden: Date;

  @Column({ type: 'varchar', nullable: false })
  estatus: string;

  @ManyToOne(() => Direccion)
  direccion: Direccion;

  @ManyToOne(() => Pago)
  pago: Pago;

  @OneToMany(() => OrdenProducto, op => op.orden)
  productos: OrdenProducto[];
}