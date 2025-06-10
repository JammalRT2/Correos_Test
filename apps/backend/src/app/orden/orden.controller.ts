import { Controller, Get, Param } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { Orden } from '../../entities/orden.entity';
import { OrdenDetalleDto } from './dto/orden-detalle.dto';

@Controller('orden')
export class OrdenController {
  constructor(private readonly ordenService: OrdenService) {}

  @Get(':id')
  async obtenerPorId(@Param('id') id: string): Promise<OrdenDetalleDto> {
    return this.ordenService.obtenerDetalleOrden(id);
  }

}