import { Button , View , ScrollView, Text, SafeAreaView,TextInput, Pressable } from 'react-native';  
import Header from './auxiliar/Header';

const styles = {
    header : { alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
    titleH1 : { fontSize: 30 },
    titleH2 : { fontSize: 20 },
    boxForms : { display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black' },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    boxButtons : {
        display: 'flex',
        justifyContent: 'center',
        width : "60%",
        marginLeft : "20%",
        marginTop : "1.5rem",
    },
    buttons : {
        margin: "10%",
        height: "30"   
    }
}

function SelectRole(props) {
    const { navigation } = props

    return (
        <>
            <ScrollView>

                <Header></Header>

            <View style={styles.boxButtons}>
                <View style={styles.buttons}>
                <Button   title= "Doador" onPress={() => navigation.navigate('LoginOrRegister', {type : 0})} />
                </View>
                <View style={styles.buttons}>
                <Button   title= "Voluntário" onPress={() => navigation.navigate('LoginOrRegister', {type : 1})} />
                </View>
                <View style={styles.buttons}>
                <Button   title= "Centro" onPress={() => navigation.navigate('LoginOrRegister', {type : 2})} />
                </View>
                <View style={styles.buttons}>
                <Button  title= "Aluno" onPress={() => navigation.navigate('LoginOrRegister', {type : 3})} />
                </View>
            </View>

            <Text style={styles.header}> 
                <Text style={styles.titleH1}>Referências</Text>
            </Text>
            </ScrollView>
        </>

    );

}

export default SelectRole;
