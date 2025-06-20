import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationOptions } from '@react-navigation/stack';
import PantallaEnvio from './screens/detalles_pedido/PantallaEnvio';
import PantallaPago from './screens/detalles_pedido/PantallaPago';
import PantallaResumen from './screens/detalles_pedido/PantallaResumen';

export type CheckoutStackParamList = {
  Envio: undefined;
  Pago: undefined;
  Resumen: undefined;
};

const Stack = createStackNavigator<CheckoutStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: 'white' },
  presentation: 'card',
  animation: 'slide_from_right',
  gestureEnabled: true,
  gestureDirection: 'horizontal',
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Envio"
        screenOptions={screenOptions}
      >
        <Stack.Screen 
          name="Envio" 
          component={PantallaEnvio}
          options={{ title: 'Envío' }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;