import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  



const styles = {
    header : {alignItems: 'center', justifyContent: 'center', backgroundColor: 'aquamarine',display:'flex' },
    titleH1 : {fontSize: 30},
    titleH2 : {fontSize: 20},
    boxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black'},
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
  
function LoginOrRegister(props) {
    const { route, navigation } = props
    const params = route.params
    const type = params.type

    console.log(type)
    console.log(type === 0) 
    return (
        <>
            <Text > 
                <Text>{params.info}</Text>
            </Text>
            <View>
            <View style={styles.boxButtons}>
            <Button title= "Login" onPress={() => navigation.navigate('Login' , {type : type})} />
            </View>
            {
             (type != 2) ?
             <View style={styles.boxButtons}>
             <Button title= "Registrar" onPress={() => navigation.navigate('RegisterUser', {type : type})} />
             </View> :
             <View style={styles.boxButtons}>
             <Button title= "Registrar" onPress={() => navigation.navigate('RegisterServiceCenter', {type : type})} />
             </View>
            }
            </View>
        </>

    );

}

export default LoginOrRegister;
