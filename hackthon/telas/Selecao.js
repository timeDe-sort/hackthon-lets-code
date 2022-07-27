import { Button , View , ScrollView, Text, SafeAreaView,TextInput, Pressable} from 'react-native';  


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

function Selecao(props) {
    const { navigation } = props

    return (
        <>
            <ScrollView>

            <Text style={styles.header}> 
                <Text style={styles.tituloh1}>Nome do Aplicativo</Text>
            </Text>

            <View style={styles.BoxButtons}>
                <View style={styles.Buttons}>
                <Button   title= "Doador" onPress={() => navigation.navigate('LoginOuRegis', {tipo : 0})} />
                </View>
                <View style={styles.Buttons}>
                <Button   title= "Voluntário" onPress={() => navigation.navigate('LoginOuRegis', {tipo : 1})} />
                </View>
                <View style={styles.Buttons}>
                <Button   title= "Centro" onPress={() => navigation.navigate('LoginOuRegis', {tipo : 2})} />
                </View>
                <View style={styles.Buttons}>
                <Button  title= "Aluno" onPress={() => navigation.navigate('LoginOuRegis', {tipo : 3})} />
                </View>
            </View>

            <Text style={styles.header}> 
                <Text style={styles.tituloh1}>Referências</Text>
            </Text>
            </ScrollView>
        </>

    );

}

export default Selecao;
