import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('direcciones')
export class Direccion {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, u => u.direcciones)
  usuario: Usuario;

  @Column()
  tipo_envio: string;

  @Column('text')
  direccion: string;

  @Column({ length: 10 })
  codigo_postal: string;

  @Column({ length: 100 })
  ciudad: string;

  @Column({ length: 100 })
  estado: string;
}