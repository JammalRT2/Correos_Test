import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orden } from '../../entities/orden.entity';
import { OrdenDetalleDto } from './dto/orden-detalle.dto';

@Injectable()
export class OrdenService {
  constructor(
    @InjectRepository(Orden)
    private readonly ordenRepo: Repository<Orden>,
  ) {}

  async obtenerDetalleOrden(id: string): Promise<OrdenDetalleDto> {
    const orden = await this.ordenRepo.findOne({
      where: { id },
      relations: [
        'usuario',
        'direccion',
        'pago',
        'productos',
        'productos.producto',
      ],
    });

    if (!orden) {
      throw new NotFoundException(`No se encontró la orden con id ${id}`);
    }

    return {
      id: orden.id,
      total: parseFloat(orden.total.toString()),
      estatus: orden.estatus,
      fecha_orden: orden.fecha_orden,
      usuario: {
        nombre: orden.usuario.nombre,
      },
      direccion: {
        tipo_envio: orden.direccion.tipo_envio,
        direccion: orden.direccion.direccion,
        codigo_postal: orden.direccion.codigo_postal,
        ciudad: orden.direccion.ciudad,
        estado: orden.direccion.estado,
      },
      pago: {
        metodo: orden.pago.metodo,
        referencia: orden.pago.detalles?.referencia || '',
      },
      productos: orden.productos.map(p => ({
        nombre: p.producto.nombre,
        precio_unitario: parseFloat(p.precio_unitario.toString()),
        cantidad: p.cantidad,
      })),
    };
  }
}
