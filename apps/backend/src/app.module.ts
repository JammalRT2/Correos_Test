import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Producto } from './entities/producto.entity';
import { Carrito } from './entities/carrito.entity';
import { Favorito } from './entities/favorito.entity';
import { Direccion } from './entities/direccion.entity';
import { Pago } from './entities/pago.entity';
import { Orden } from './entities/orden.entity';
import { OrdenProducto } from './entities/orden-producto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // cambia si estás usando Docker u otro host
      port: 5432,
      username: 'postgres',
      password: 'admin', // cambia según tu configuración
      database: 'correos_mexico',
      entities: [Usuario, Producto, Carrito, Favorito, Direccion, Pago, Orden, OrdenProducto],
      synchronize: true, // Solo en desarrollo
    }),
    TypeOrmModule.forFeature([Usuario, Producto, Carrito, Favorito, Direccion, Pago, Orden, OrdenProducto]),
  ],
})
export class AppModule {}
