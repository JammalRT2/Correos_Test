import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrito } from './entities/carrito.entity';
import { Repository } from 'typeorm';
import { CreateCarritoDto } from './dto/create-carrito.dto';
import { Usuario } from '../../entities/usuario.entity';
import { Producto } from '../../entities/producto.entity';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepo: Repository<Carrito>,

    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,

    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  async findByUsuario(usuarioId: string) {
    return this.carritoRepo
      .createQueryBuilder('carrito')
      .leftJoinAndSelect('carrito.producto', 'producto')
      .leftJoinAndSelect('carrito.usuario', 'usuario') // 👈 esto carga usuario completo
      .where('carrito.usuarioId = :usuarioId', { usuarioId }) // 👈 usa directamente la FK
      .andWhere('carrito.activo = true')
      .getMany();
  }



  async create(dto: CreateCarritoDto) {
    const usuario = await this.usuarioRepo.findOneBy({ id: dto.usuarioId });
    const producto = await this.productoRepo.findOneBy({ id: dto.productoId });

    if (!usuario || !producto) {
      throw new Error('Usuario o producto no encontrado');
    }

    const item = new Carrito();
    item.usuario = usuario;
    item.producto = producto;
    item.cantidad = dto.cantidad;
    item.precio_unitario = dto.precio_unitario;
    item.activo = dto.activo;

    return this.carritoRepo.save(item);
  }

  async delete(id: string) {
    return this.carritoRepo.delete(id);
  }

  async updateCantidad(id: string, cantidad: number) {
    await this.carritoRepo.update(id, { cantidad });
    return this.carritoRepo.findOne({ where: { id } });
  }
}
