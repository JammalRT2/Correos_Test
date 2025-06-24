import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import PantallaEnvio from './screens/detalles_pedido/PantallaEnvio';
import PantallaFavoritos from './screens/favoritos/Pantalla_favoritos'; // ← Renombrado aquí
import PantallaPago from './screens/detalles_pedido/PantallaPago';
import PantallaResumen from './screens/detalles_pedido/PantallaResumen';
import CarritoScreen from './screens/carrito/Pantalla_carrito';

export type CheckoutStackParamList = {
  Envio: undefined;
  Pago: undefined;
  Resumen: undefined;
  Carrito: undefined;
  Favoritos: undefined;
};

const Stack = createNativeStackNavigator<CheckoutStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Envio"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="Envio" 
          component={PantallaEnvio}
          options={{ title: 'Envío' }}
        />
        <Stack.Screen
          name="Favoritos"
          component={PantallaFavoritos} // ← Renombrado aquí
          options={{ title: 'Favoritos' }}
        />
        <Stack.Screen 
          name="Pago" 
          component={PantallaPago}
          options={{ title: 'Pago' }}
        />
        <Stack.Screen 
          name="Resumen" 
          component={PantallaResumen}
          options={{ title: 'Resumen' }}
        />
        <Stack.Screen 
          name="Carrito" 
          component={CarritoScreen}
          options={{ title: 'Carrito' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
