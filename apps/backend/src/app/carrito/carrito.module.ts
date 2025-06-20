import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarritoService } from './carrito.service';
import { CarritoController } from './carrito.controller';
import { Carrito } from './entities/carrito.entity';
import { Usuario } from '../../entities/usuario.entity';
import { Producto } from '../../entities/producto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito, Usuario, Producto])],
  controllers: [CarritoController],
  providers: [CarritoService],
})
export class CarritoModule {}
