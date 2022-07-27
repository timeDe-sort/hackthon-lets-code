import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  



  
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

            <Button title= "Login" onPress={() => navigation.navigate('Login' , {tipo : tipo})} />

            {
             (tipo != 2) ?
             <Button title= "Registrar" onPress={() => navigation.navigate('Registrar', {tipo : tipo})} /> :
             <Button title= "Registrar" onPress={() => navigation.navigate('RegistrarCentro', {tipo : tipo})} />
            }


            </View>

            <Text>
                TESTEEEEE
            </Text>


        </>

    );

}

export default LoginOuRegis;
