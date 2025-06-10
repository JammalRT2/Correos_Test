import { View, Button } from 'react-native';

export default function PantallaPago({ navigation, route }) {
  const { envio } = route.params;

  const pagar = (metodoPago) => {
    // Simulación: se pasa a la siguiente pantalla con los datos
    navigation.navigate('Resumen', {
      envio,
      metodoPago,
      ordenId: 'c1189c23-fcaa-48ce-a363-0ce9267914b9', // este lo puedes cambiar si haces un POST real
    });
  };

  return (
    <View>
      <Button title="Pagar con tarjeta" onPress={() => pagar('tarjeta')} />
      <Button title="Paypal" onPress={() => pagar('paypal')} />
    </View>
  );
}
