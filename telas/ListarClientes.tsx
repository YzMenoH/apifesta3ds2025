import { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import Cliente from '../components/Cliente';

import api from '../components/Api';

import {useNavigation,} from '@react-navigation/native';

type ClienteType = { id: number; nome: string; cpf: string; saldo: number };

export default function ListarClientes() {

    const navigation = useNavigation();

    const [clientes, setCliente] = useState<ClienteType[]>([]);

    async function buscaClientes(){
        const response = await api.get('clientes');
        setCliente(response.data);
    }

    useEffect(
        ()=>{
            buscaClientes();
        },[]
    );

    async function excluir(id: number) {
            try {
               const r = await api.delete(`clientes/${id}`);

                Alert.alert(
                "Excluir",`${JSON.stringify(r.data)}`
                );

                await buscaClientes();
            } catch (e: any) {
                Alert.alert("Erro ao excluir", e?.message ?? "Erro desconhecido");
            }
    }

    function editar(item: ClienteType){
      navigation.navigate('TelaEditar' as never, {cliente : item} as never);
    }
 return (
    <>
      <View style={styles.container}>
        <View style={styles.bloco}>
            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('TelaCad' as never)}>
                <Text style={styles.txtBtn}>Novo Cliente</Text>
            </TouchableOpacity>
        </View>

          <View style={styles.bloco}>
              <Text style={styles.titulo}> Lista dos Clientes</Text>

              <FlatList 
                  data={clientes}
                  keyExtractor={(item)=> String(item.id)}
                  renderItem={({item})=><Cliente nome={item.nome} cpf={item.cpf} saldo={item.saldo} 
                  id={item.id} onExcluir={()=>excluir(item.id)} onEditar={()=>editar(item)}/>}
                  style={styles.lista}
              />
          </View>  
      </View>     
    </>   
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  titulo:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:10,
    marginBottom:10,
    color: '#fff'
  },
  btn:{
    backgroundColor:'#9023FF',
    padding:10,
    borderRadius:20,
    width:'90%',
    marginHorizontal: 10,
    shadowColor: '#9023FF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  txtBtn:{
    textAlign:'center',
    fontSize:20,
    color: '#fff',
    fontWeight: 'bold'
  },
  bloco:{
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  lista:{
    width:'90%',
    height:'80%',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#3f3f3f',
    padding: 20
  }
});