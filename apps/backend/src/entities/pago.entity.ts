import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('pagos')
export class Pago {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario, u => u.pagos)
  usuario: Usuario;

  @Column()
  metodo: string;

  @Column({ type: 'jsonb' })
  detalles: any;

  @CreateDateColumn()
  fecha_pago: Date;
}
