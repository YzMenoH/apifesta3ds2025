import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Image } from 'react-native';
import { useEffect } from 'react';

export default function Home() {

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.tituloBloco}>
        <Image
          source={require('../assets/img/LOGO.png')}
          style={styles.imgLogo}
        />

        <Text style={styles.titulo}>Eventos para Você!</Text>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.desc}>Escolha alguma sessão abaixo.</Text>
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.btn}
            onPress={()=>navigation.navigate('ListarClientes' as never)}>
              <Text style={styles.txtBtn}>Clientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
              <Text style={styles.txtBtn}>Usuários</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.blocoImg}>
          <Image
            source={require('../assets/img/PESSOA.png')}
            style={styles.imgPessoa}
          />
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

  },
  imgLogo:{
    width: 200,
    height: 200, 
  },
  tituloBloco:{
    backgroundColor:'#9023FF',
    justifyContent: 'center',
    alignItems:'center', 
    width: '100%',
    paddingTop:30,
    paddingBottom:30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    shadowColor: '#9023FF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 60, 
  },
  titulo:{
    fontSize:25,
    fontWeight:'bold',
    color: '#fff',
    textAlign: 'center'
  },
  desc:{
    color: '#fff',
    backgroundColor: '#9023FF',
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
    margin: 20,
    paddingVertical: 20,
    fontWeight: 'bold',
    borderBottomColor: '#9023FF',
    borderRadius: 30,
    shadowColor: '#9023FF', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 20, 
  },
  botoes:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btn:{
    backgroundColor:'#9023FF',
    padding:10,
    borderRadius:20,
    width:175,
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
    width:'100%'
  },
  blocoImg:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imgPessoa:{
  width: '90%',
  height: 300,
  borderRadius: 30,
  borderWidth: 5,
  borderColor:'#9023FF',
  shadowColor: '#9023FF', 
  shadowOffset: { width: 0, height: 4 }, 
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 10, 
  },
});
