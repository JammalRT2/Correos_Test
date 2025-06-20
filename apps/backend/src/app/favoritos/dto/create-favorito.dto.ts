import { IsUUID } from 'class-validator';

export class CreateFavoritoDto {
  @IsUUID()
  usuarioId: string;

  @IsUUID()
  productoId: string;
}
