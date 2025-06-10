import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PantallaEnvio from './screens/detalles_pedido/PantallaEnvio';
import PantallaPago from './screens/detalles_pedido/PantallaPago';
import PantallaResumen from './screens/detalles_pedido/PantallaResumen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Envio">
        <Stack.Screen name="Envio" component={PantallaEnvio} />
        <Stack.Screen name="Pago" component={PantallaPago} />
        <Stack.Screen name="Resumen" component={PantallaResumen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}