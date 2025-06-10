// apps/backend/src/entities/pago.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, u => u.pagos)
  usuario: Usuario;

  @Column({ type: 'varchar', nullable: false })
  metodo: string;

  @Column({ type: 'jsonb', nullable: false })
  detalles: any;

  @CreateDateColumn({ nullable: false })
  fecha_pago: Date;
}