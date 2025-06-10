// apps/backend/src/entities/direccion.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('direcciones')
export class Direccion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, u => u.direcciones)
  usuario: Usuario;

  @Column({ type: 'varchar', nullable: false })
  tipo_envio: string;

  @Column({ type: 'text', nullable: false })
  direccion: string;

  @Column({ type: 'varchar', length: 10, nullable: false })
  codigo_postal: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  ciudad: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  estado: string;
}