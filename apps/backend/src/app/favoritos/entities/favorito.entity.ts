import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Usuario } from '../../../entities/usuario.entity';
import { Producto } from '../../../entities/producto.entity';

@Entity()
export class Favorito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'fecha_agregado' })
  fechaAgregado: Date;

  @ManyToOne(() => Usuario, usuario => usuario.favoritos, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @ManyToOne(() => Producto, { eager: true, onDelete: 'CASCADE' })
  producto: Producto;
}
