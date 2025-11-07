import { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import api from '../components/Api';
import Usuario from '../components/Usuario';

import {useNavigation,} from '@react-navigation/native';

type UsuarioType = { id: number; nome: string; login: string; senha: string };

export default function ListarUsuarios() {

    const navigation = useNavigation();

    const [usuario, setUsuario] = useState<UsuarioType[]>([]);

    async function buscaUsuarios(){
        const response = await api.get('usuarios');
        setUsuario(response.data);
    }

    useEffect(
        ()=>{
            buscaUsuarios();
        },[]
    );

    async function excluir(id: number) {
            try {
               const r = await api.delete(`usuarios/${id}`);

                Alert.alert(
                "Excluir",`${JSON.stringify(r.data)}`
                );

                await buscaUsuarios();
            } catch (e: any) {
                Alert.alert("Erro ao excluir", e?.message ?? "Erro desconhecido");
            }
    }

    function editar(item: UsuarioType){
      navigation.navigate('TelaEditarUsuario' as never, {usuario : item} as never);
    }
 return (
    <>
      <View style={styles.container}>
          <View style={styles.bloco}>
              <Text style={styles.titulo}> Lista dos Usuários</Text>

              <FlatList 
                  data={usuario}
                  keyExtractor={(item)=> String(item.id)}
                  renderItem={({item})=><Usuario nome={item.nome} login={item.login} senha={item.senha} 
                  id={item.id} onExcluir={()=>excluir(item.id)} onEditar={()=>editar(item)}/>}
                  style={styles.lista}
              />
          </View>  
          <View style={styles.bloco}>
            <View style={styles.desc}>
              <Text style={styles.desUsuario}>
              Quer criar um novo usuário?
              </Text>
              <Text style={styles.desUsuario}>
              Então vá em "Novo Usuário"
              </Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('TelaCadUsuario' as never)}>
                <Text style={styles.txtBtn}>Novo Usuário</Text>
            </TouchableOpacity>
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
    width:'100%',
  },
  titulo:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor: '#9023FF',
    width: '100%',
    padding: 10,
    marginBottom:20,
    color: '#fff',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#9023FF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
  },
  btn:{
    marginTop: 20,
    backgroundColor:'#9023FF',
    padding:10,
    borderRadius:20,
    width:'80%',
    marginHorizontal: 10,
    shadowColor: '#9023FF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
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
    width:'80%',
    backgroundColor: '#161616',
    height:'55%',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#9023FF',
    padding: 15,
    shadowColor: '#9023FF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10, 
  },
  desc:{
    marginTop: 20,
    backgroundColor: '#9023FF',
    width: '80%',
    fontSize: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomColor: '#9023FF',
    borderRadius: 20,
    shadowColor: '#9023FF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5, 
  },
  desUsuario:{
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  }
});