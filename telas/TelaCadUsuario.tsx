import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../components/Api';

export default function TelaCadUsuario() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const limparInfoInput = () => {
    setNome('');
    setLogin('');
    setSenha('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Usuário</Text>

      <View style={styles.bloco}>

        <TextInput
          style={styles.input}
          placeholder='Digite seu nome'
          placeholderTextColor="#161616"
          value={nome}
          onChangeText={(value) => setNome(value)}
        />

        <TextInput
          style={styles.input}
          placeholder='Digite seu Login'
          placeholderTextColor="#161616"
          value={login}
          onChangeText={(value) => setLogin(value)}
        />

        <TextInput
          style={styles.input}
          placeholder='Digite o senha'
          placeholderTextColor="#161616"
          value={senha}
          onChangeText={(value) => setSenha(value)}
        />

        <View style={styles.botoes}>
          <TouchableOpacity style={[styles.btn, styles.btnLimpar]} onPress={limparInfoInput}>
            <Text style={styles.txtBtn}>Limpar Info</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            onPress={async () => {
              try {
                const resp = await api.post('usuarios', {
                  nome: nome,
                  login: login,
                  senha: senha
                });

                alert(JSON.stringify(resp.data.message));
                navigation.navigate('ListarUsuarios' as never);
              } catch {
                alert("Deu erro!");
              }
            }}
          >
            <Text style={styles.txtBtn}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff'
  },
  bloco: {
    marginLeft: '10%',
    marginRight: '10%',
    width: '80%',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#3f3f3f',
    borderRadius: 15,
    color: '#fff',
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#4eb75eff',
    padding: 10,
    borderRadius: 20,
    width: '45%',
    alignSelf: 'center',
    shadowColor: '#4eb75eff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    marginHorizontal: 5,
  },
  btnLimpar: {
    backgroundColor: '#ff5555', 
    shadowColor: '#ff5555',
  },
  txtBtn: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
});