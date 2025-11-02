// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';


import Home from './telas/Home';
import ListarClientes from './telas/ListarClientes';
import TelaCad from './telas/TelaCad';
import TelaEditar from './telas/TelaEditar';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options:{
        title:'Up! Eventos'
      },
    },
    ListarClientes:{
      screen: ListarClientes,
      options:{
        title:'Todos seus Clientes'
      },
    },
    TelaCad:{
      screen: TelaCad,
      options:{
        title:'Cadastro Clientes'
      },
    },
    TelaEditar:{
      screen: TelaEditar,
      options:{
        title:'Alterar cadastro de Cliente'
      },
    },
  },

    screenOptions: {
    headerStyle: { backgroundColor: '#9023FF' },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
