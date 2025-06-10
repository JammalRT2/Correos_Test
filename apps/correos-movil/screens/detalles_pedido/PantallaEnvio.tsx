import { View, Button } from 'react-native';

export default function PantallaEnvio({ navigation }) {
  const envioSeleccionado = (tipo) => {
    navigation.navigate('Pago', { envio: tipo });
  };

  return (
    <View>
      <Button title="Punto de recogida" onPress={() => envioSeleccionado('recogida')} />
      <Button title="Domicilio" onPress={() => envioSeleccionado('domicilio')} />
      <Button title="Express" onPress={() => envioSeleccionado('express')} />
    </View>
  );
}
