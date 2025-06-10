import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden } from '../../entities/orden.entity';
import { OrdenProducto } from '../../entities/orden-producto.entity';
import { Producto } from '../../entities/producto.entity';
import { Pago } from '../../entities/pago.entity';
import { Direccion } from '../../entities/direccion.entity';
import { Usuario } from '../../entities/usuario.entity';

import { OrdenController } from './orden.controller';
import { OrdenService } from './orden.service';

@Module({
  imports: [TypeOrmModule.forFeature([Orden, OrdenProducto, Producto, Pago, Direccion, Usuario])],
  controllers: [OrdenController],
  providers: [OrdenService],
})
export class OrdenModule {}
