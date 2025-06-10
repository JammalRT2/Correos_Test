import { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import { api } from '../../utils/api';

export default function PantallaResumen({ route }) {
  const { ordenId } = route.params;
  const [orden, setOrden] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/orden/${ordenId}`)
      .then(res => {
        setOrden(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener orden:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#000" />;
  }

  if (!orden) {
    return <Text>Error al cargar la orden.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Resumen de compra</Text>

      <Text style={{ marginTop: 10 }}>Estado: {orden.estatus}</Text>
      <Text>Fecha: {new Date(orden.fecha_orden).toLocaleString()}</Text>
      <Text>Total: ${orden.total}</Text>

      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Enviado a:</Text>
      <Text>{orden.direccion.direccion}</Text>
      <Text>{orden.direccion.ciudad}, {orden.direccion.estado}, CP {orden.direccion.codigo_postal}</Text>
      <Text>Tipo de envío: {orden.direccion.tipo_envio}</Text>

      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Método de pago:</Text>
      <Text>{orden.pago.metodo}</Text>
      <Text>Referencia: {orden.pago.referencia}</Text>

      <Text style={{ marginTop: 10, fontWeight: 'bold' }}>Productos:</Text>
      {orden.productos.map((prod, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text>• {prod.nombre}</Text>
          <Text>  Cantidad: {prod.cantidad}</Text>
          <Text>  Precio unitario: ${prod.precio_unitario}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
