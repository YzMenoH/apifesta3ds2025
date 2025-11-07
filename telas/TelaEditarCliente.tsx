import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import {useNavigation, useRoute} from '@react-navigation/native';

import api from '../components/Api';

export default function TelaEditarCliente() {

type ClienteType = {id:number, nome: string, cpf: string, saldo: number};

const route = useRoute();

const {cliente} = route.params as {cliente: ClienteType};

 const navigation = useNavigation();

 const [id, setId] = useState(String(cliente?.id ?? ''));
 const [nome, setNome] = useState(String(cliente?.nome ?? ''));
 const [cpf, setCpf] = useState(String(cliente?.cpf ?? ''));
 const [saldo, setSaldo] = useState(String(cliente?.saldo ?? ''));
 return (
    <>
        <View style={styles.container}>
              <Text style={styles.titulo}>Editar Cadastro</Text>
        
              <View style={styles.bloco}>
                <TextInput 
                    style={styles.input}
                    placeholder='ID'
                    placeholderTextColor="#161616"
                    value={id}
                    onChangeText={(value)=>setId(value)}
                    editable={false}
                />
                
                <TextInput 
                    style={styles.input}
                    placeholder='Digite seu nome'
                    placeholderTextColor="#161616"
                    value={nome}
                    onChangeText={(value)=>setNome(value)}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Digite seu CPF'
                    placeholderTextColor="#161616"
                    value={cpf}
                    onChangeText={(value)=>setCpf(value)}
                />


                <TextInput 
                    style={styles.input}
                    placeholder='Digite o saldo'
                    placeholderTextColor="#161616"
                    value={saldo}
                    onChangeText={(value)=>setSaldo(value)}
                    />
              </View>
              <View style={styles.botoes}>
                <TouchableOpacity style={styles.btnCancelar}
                onPress={() => navigation.goBack()}
                >
                  <Text style={styles.txtBtn}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnAlterar}>
                  <Text style={styles.txtBtn} onPress={async ()=> {
                    try{
                        const resp = await api.put('clientes',{
                                    id:id,
                                    nome: nome,
                                    cpf:cpf,
                                    saldo:saldo
                                });

                                alert(JSON.stringify(resp.data.message));
                                navigation.navigate('ListarClientes' as never);
                        }catch{
                                alert("Deu erro!");
                        }        
                    }
                        
                    }
                  >Alterar</Text>
                </TouchableOpacity>
              </View>
                
        
                
        
            </View>

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  bloco:{
    marginLeft:'10%',
    marginRight:'10%',
    width:'80%',    
  },
  btnCancelar:{
    marginTop: 20,
    backgroundColor: '#ff5555',
    padding: 10,
    borderRadius: 20,
    width: '35%',
    alignSelf: 'center',
    shadowColor: '#ff5555',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 5,
  },
  btnAlterar:{
    marginTop: 20,
    backgroundColor: '#479df3ff',
    padding: 10,
    borderRadius: 20,
    width: '35%',
    alignSelf: 'center',
    shadowColor: '#479df3ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 5,
  },
  txtBtn:{
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#3f3f3f',
    borderRadius: 15,
    color: '#fff',
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  botoes:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
});