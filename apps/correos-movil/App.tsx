<<<<<<< HEAD
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigationOptions } from '@react-navigation/stack';
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
>>>>>>> 1ce9123e786b5a5ac2fe48e15e625a1ab1974b07
import PantallaEnvio from './screens/detalles_pedido/PantallaEnvio';
import PantallaPago from './screens/detalles_pedido/PantallaPago';
import PantallaResumen from './screens/detalles_pedido/PantallaResumen';

<<<<<<< HEAD
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
=======
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
>>>>>>> 1ce9123e786b5a5ac2fe48e15e625a1ab1974b07
