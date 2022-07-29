import { View, SafeAreaView} from 'react-native';  
import Header from './auxiliar/Header';
import { Button } from 'react-native-paper';
import { styles } from './auxiliar/Styles';
  
function LoginOrRegister(props) {
    const { route, navigation } = props
    const params = route.params
    const type = params.type

    console.log(type)
    console.log(type === 0) 
    return (
        <>
            <SafeAreaView style={styles.backGround}>
                <Header></Header>

                <View style={styles.boxButtons}>
                    <View style={styles.buttons}>
                        <Button color={'#272343'} onPress={() => navigation.navigate('Login' , {type : type})}>
                            Login
                        </Button>
                    </View>
                    {
                        (type != 2) ?
                    <View style={styles.buttons}>
                        <Button color={'#272343'}    onPress={() => navigation.navigate('RegisterUser', {type : type})}>
                            Registrar
                        </Button>
                    </View> :
                    <View style={styles.buttons}>
                        <Button color={'#272343'} onPress={() => navigation.navigate('RegisterServiceCenter', {type : type})}>
                            Registrar
                        </Button>
                    </View>
                    }
                </View>
            </SafeAreaView>
        </>

    );

}

export default LoginOrRegister;
