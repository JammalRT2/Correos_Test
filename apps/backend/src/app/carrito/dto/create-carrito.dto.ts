import { IsUUID, IsInt, IsNumber, IsBoolean } from 'class-validator';

export class CreateCarritoDto {
  @IsUUID()
  usuarioId: string;

  @IsUUID()
  productoId: string;

  @IsInt()
  cantidad: number;

  @IsNumber()
  precio_unitario: number;

  @IsBoolean()
  activo: boolean;
}
