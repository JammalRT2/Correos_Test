// apps/backend/src/entities/favorito.entity.ts
import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Producto } from './producto.entity';

@Entity('favoritos')
export class Favorito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, u => u.favoritos, { onDelete: 'CASCADE' })
  usuario: Usuario;

  @ManyToOne(() => Producto, p => p.favoritos, { onDelete: 'CASCADE' })
  producto: Producto;

  @CreateDateColumn({ nullable: false })
  fecha_agregado: Date;
}