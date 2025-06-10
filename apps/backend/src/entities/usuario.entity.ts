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

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100, unique: true })
  correo: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @CreateDateColumn()
  fecha_registro: Date;

  @OneToMany(() => Carrito, c => c.usuario) carrito: Carrito[];
  @OneToMany(() => Favorito, f => f.usuario) favoritos: Favorito[];
  @OneToMany(() => Direccion, d => d.usuario) direcciones: Direccion[];
  @OneToMany(() => Pago, p => p.usuario) pagos: Pago[];
  @OneToMany(() => Orden, o => o.usuario) ordenes: Orden[];
}