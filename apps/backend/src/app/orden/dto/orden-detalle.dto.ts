export class OrdenDetalleDto {
  id: string;
  total: number;
  estatus: string;
  fecha_orden: Date;
  usuario: {
    nombre: string;
  };
  direccion: {
    tipo_envio: string;
    direccion: string;
    codigo_postal: string;
    ciudad: string;
    estado: string;
  };
  pago: {
    metodo: string;
    referencia: string;
  };
  productos: {
    nombre: string;
    precio_unitario: number;
    cantidad: number;
  }[];
}
