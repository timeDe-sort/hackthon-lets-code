import { View , ScrollView} from 'react-native';  
import Header from './auxiliar/Header';
import { Button } from 'react-native-paper';
import { styles } from './auxiliar/Styles';

function SelectRole(props) {
    const { navigation } = props

    return (
        <>
            <ScrollView style={styles.backGround}>

                <Header></Header>

                <View style={styles.boxButtons}>
                    <View style={styles.buttons}>
                    <Button  color={'#272343'}   onPress={() => navigation.navigate('LoginOrRegister', {type : 0})}>
                        Doador
                    </Button>
                    </View>
                    <View style={styles.buttons}>
                    <Button  color={'#272343'} title= "Voluntário" onPress={() => navigation.navigate('LoginOrRegister', {type : 1})} >
                        Voluntário
                    </Button>
                    </View>
                    <View style={styles.buttons}>
                    <Button  color={'#272343'} title= "Centro" onPress={() => navigation.navigate('LoginOrRegister', {type : 2})} >
                    Centro
                    </Button>
                    </View>
                    <View style={styles.buttons}>
                    <Button color={'#272343'} title= "Aluno" onPress={() => navigation.navigate('LoginOrRegister', {type : 3})} >
                        Aluno
                    </Button>
                    </View>
                </View>

                {/* <Text style={styles.header}> 
                    <Text style={styles.titleH1}>Referências</Text>
                </Text> */}
            </ScrollView>
        </>

    );

}

export default SelectRole;
