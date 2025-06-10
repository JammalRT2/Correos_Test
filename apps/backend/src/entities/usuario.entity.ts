// apps/backend/src/entities/usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Carrito } from './carrito.entity';
import { Favorito } from './favorito.entity';
import { Direccion } from './direccion.entity';
import { Pago } from './pago.entity';
import { Orden } from './orden.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', length: 100, unique: true, nullable: false })
  correo: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  telefono: string;

  @CreateDateColumn({ nullable: false })
  fecha_registro: Date;

  @OneToMany(() => Carrito, c => c.usuario) carrito: Carrito[];
  @OneToMany(() => Favorito, f => f.usuario) favoritos: Favorito[];
  @OneToMany(() => Direccion, d => d.usuario) direcciones: Direccion[];
  @OneToMany(() => Pago, p => p.usuario) pagos: Pago[];
  @OneToMany(() => Orden, o => o.usuario) ordenes: Orden[];
}