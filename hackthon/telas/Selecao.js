import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  




function Selecao(props) {
    const { navigation } = props

    return (
        <>


            <Text > 
                <Text>Nome do Aplicativo</Text>
            </Text>

            <View>

            <Button title= "Doador" onPress={() => navigation.navigate('LoginOuRegis', {info : 0})} />

            <Button title= "Voluntário" onPress={() => navigation.navigate('LoginOuRegis', {info : 1})} />

            <Button title= "Centro" onPress={() => navigation.navigate('LoginOuRegis', {info : 2})} />

            <Button title= "Aluno" onPress={() => navigation.navigate('LoginOuRegis', {info : 3})} />

            </View>


        </>

    );

}

export default Selecao;
