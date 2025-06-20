import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn, RelationId } from 'typeorm';
import { Usuario } from '../../../entities/usuario.entity';
import { Producto } from '../../../entities/producto.entity';

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  cantidad: number;

  @CreateDateColumn({ name: 'fecha_agregado' })
  fechaAgregado: Date;

  @ManyToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @Column()
  @RelationId((carrito: Carrito) => carrito.usuario)
  usuarioId: string;

  @ManyToOne(() => Producto, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productoId' })
  producto: Producto;

  @RelationId((carrito: Carrito) => carrito.producto)
  productoId: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;

  @Column({ type: 'boolean', default: true })
  activo: boolean;
}
