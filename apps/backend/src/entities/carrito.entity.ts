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

  @Column({ default: 1 })
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn()
  fecha_agregado: Date;
}
