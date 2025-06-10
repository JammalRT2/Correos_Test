import { View, Button } from 'react-native';

export default function PantallaPago({ navigation, route }) {
  const { envio } = route.params;

  const pagar = (metodoPago) => {
    // Simulación: se pasa a la siguiente pantalla con los datos
    navigation.navigate('Resumen', {
      envio,
      metodoPago,
      ordenId: 'aquí-va-el-id-generado-o-hardcodeado', // este lo puedes cambiar si haces un POST real
    });
  };

  return (
    <View>
      <Button title="Pagar con tarjeta" onPress={() => pagar('tarjeta')} />
      <Button title="Paypal" onPress={() => pagar('paypal')} />
    </View>
  );
}
