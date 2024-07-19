// src/navigation/StackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/home';
import DashboardScreen from '../components/DashboardScreen';
import CharactersScreen from '../components/CharactersScreen'; // Importa el nuevo componente
import DashboardScene from '../components/Scene';

export type RootStackParamList = {
  Home: undefined;
  Dashboard: undefined;
  Scenes: undefined;
  Characters: undefined; // Añade la nueva ruta aquí
};

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Scenes' component={DashboardScene} options ={{headerShown:false}}/>
      <Stack.Screen name="Characters" component={CharactersScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
