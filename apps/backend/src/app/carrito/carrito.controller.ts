import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { CarritoService } from './carrito.service';
import { CreateCarritoDto } from './dto/create-carrito.dto';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

  @Get(':usuarioId')
  findByUsuario(@Param('usuarioId') usuarioId: string) {
    return this.carritoService.findByUsuario(usuarioId);
  }

  @Post()
  create(@Body() dto: CreateCarritoDto) {
    return this.carritoService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.carritoService.delete(id);
  }

  @Patch(':id/cantidad/:cantidad')
  updateCantidad(@Param('id') id: string, @Param('cantidad') cantidad: number) {
    return this.carritoService.updateCantidad(id, cantidad);
  }
}
