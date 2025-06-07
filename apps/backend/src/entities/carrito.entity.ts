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

  @CreateDateColumn()
  fecha_agregado: Date;
}
