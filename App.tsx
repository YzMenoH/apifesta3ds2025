// In App.js in a new project

import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';


import Home from './telas/Home';
import ListarClientes from './telas/ListarClientes';
import ListarUsuarios from './telas/ListarUsuarios';
import TelaCadCliente from './telas/TelaCadCliente';
import TelaCadUsuario from './telas/TelaCadUsuario';
import TelaEditarCliente from './telas/TelaEditarCliente';
import TelaEditarUsuario from './telas/TelaEditarUsuario';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Home,
      options:{
        title:'Up! Eventos Admin'
      },
    },
    ListarClientes:{
      screen: ListarClientes,
      options:{
        title:'Todos seus Clientes'
      },
    },
    ListarUsuarios:{
      screen: ListarUsuarios,
      options:{
        title:'Todos seus Usuários'
      },
    },
    TelaCadCliente:{
      screen: TelaCadCliente,
      options:{
        title:'Cadastro Clientes'
      },
    },
    TelaCadUsuario:{
      screen: TelaCadUsuario,
      options:{
        title:'Cadastro Usuários'
      },
    },
    TelaEditarCliente:{
      screen: TelaEditarCliente,
      options:{
        title:'Alterar cadastro de Cliente'
      },
    },
    TelaEditarUsuario:{
      screen: TelaEditarUsuario,
      options:{
        title:'Alterar cadastro do Usuário'
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
