import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  





const styles = {
    header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
    tituloh1 : {fontSize: 30},
    tituloh2 : {fontSize: 20},
    BoxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: "1px solid black"},
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  
  }

  
function Selecao(props) {

    return (
        <>


            <Text > 
                <Text>Nome do Aplicativo</Text>
            </Text>

            <View>

            <Button title= "Doador" onPress={() => navigation.navigate('LoginOuRegis' , {info : 0})} />

            <Button title= "Voluntário" onPress={() => navigation.navigate('LoginOuRegis', {info : 1})} />

            <Button title= "Centro" onPress={() => navigation.navigate('LoginOuRegis', {info : 2})} />

            <Button title= "Aluno" onPress={() => navigation.navigate('LoginOuRegis', {info : 3})} />



            </View>

            <Text>
                TESTEEEEE
            </Text>


        </>

    );

}

export default Selecao;
