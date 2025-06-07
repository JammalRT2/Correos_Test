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

  @ManyToOne(() => Direccion)
  direccion: Direccion;

  @ManyToOne(() => Pago)
  pago: Pago;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  @CreateDateColumn()
  fecha_orden: Date;

  @Column({ default: 'orden_realizada' })
  estatus: string;

  @OneToMany(() => OrdenProducto, op => op.orden)
  productos: OrdenProducto[];
}
