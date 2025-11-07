import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';

interface propUsuario{
    id:number,
    nome:String,
    login:String,
    senha:String,
    onExcluir?: () => void,
    onEditar?: () => void
}

export default function Usuario({id, nome, login, senha,  onExcluir, onEditar}:propUsuario) {
 return (
   <>
        <View style={styles.bloco}>
            <Text style={styles.texto}>Cod.: {id}</Text>
            <Text style={styles.texto}>Nome: {nome}</Text>
            <Text style={styles.texto}>Login: {login}</Text>

            <View style={styles.row}>
                <TouchableOpacity style={styles.btnExcluir}  onPress={onExcluir}>
                    <Text style={styles.txtBtn}>Excluir</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnEditar} onPress={onEditar}>
                    <Text style={styles.txtBtn}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
            
   </>
  );
}

const styles = StyleSheet.create({
    bloco:{
        backgroundColor:'#3f3f3f',
        borderRadius: 15,
        paddingTop: 10,
        marginVertical:5,
    },
    texto:{
        fontSize:20,
        color: '#fff',
        fontWeight: 'bold',
        marginLeft:8,
    },
    row:{
        flexDirection:"row",
        justifyContent:'center',
        width:'50%',
        marginLeft: 5,
        marginTop:5,
    },
    btnExcluir:{
        flex:1,
        backgroundColor:'#962137ff',
        padding:5,
        borderRadius:15,
        margin:2,
        width: 20,
        borderColor: '#161616',
        borderWidth: 2,
    },
    btnEditar:{
        flex:1,
        backgroundColor:'#afa738ff',
        padding:5,
        borderRadius:15,
        margin:2,
        borderColor: '#161616',
        borderWidth: 2,
    },
    txtBtn:{
        textAlign:'center',
        color: '#fff',
    }
})