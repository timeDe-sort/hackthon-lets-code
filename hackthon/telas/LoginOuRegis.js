import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  



  
function LoginOuRegis(props) {
    const { route,navigation } = props
    const params = route.params
    console.log(params)
    return (
        <>


            <Text > 
                <Text>{params.info}</Text>
            </Text>

            <View>

            <Button title= "Login" onPress={() => navigation.navigate('' , {info : 0})} />

            <Button title= "Registrar" onPress={() => navigation.navigate('Registrar', {info : 1})} />



            </View>

            <Text>
                TESTEEEEE
            </Text>


        </>

    );

}

export default LoginOuRegis;
