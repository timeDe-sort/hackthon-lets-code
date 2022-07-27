import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  



const styles = {
    header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
    tituloh1 : {fontSize: 30},
    tituloh2 : {fontSize: 20},
    BoxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black'},
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    BoxButtons : {
        display: 'flex',
        justifyContent: 'center',
        width : "60%",
        marginLeft : "20%",
        marginTop : "1.5rem",
    },
    Buttons : {
        margin: "10%",
        height: "30"
        
    }

  
  }
  
function LoginOuRegis(props) {
    const { route,navigation } = props
    const params = route.params
    const tipo = params.tipo


    console.log(tipo)
    console.log(tipo === 0) 
    return (
        <>


            <Text > 
                <Text>{params.info}</Text>
            </Text>

            <View>

            <View style={styles.BoxButtons}>
            <Button title= "Login" onPress={() => navigation.navigate('Login' , {tipo : tipo})} />
            </View>
            {
             (tipo != 2) ?
             <View style={styles.BoxButtons}>
             <Button title= "Registrar" onPress={() => navigation.navigate('Registrar', {tipo : tipo})} />
             </View> :
             <View style={styles.BoxButtons}>
             <Button title= "Registrar" onPress={() => navigation.navigate('RegistrarCentro', {tipo : tipo})} />
             </View>
            }


            </View>


        </>

    );

}

export default LoginOuRegis;
