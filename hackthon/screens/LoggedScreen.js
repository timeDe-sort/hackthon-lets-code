import { Button , View , ScrollView, Text, SafeAreaView,TextInput, Pressable} from 'react-native';  
import { Avatar } from 'react-native-paper';
import Header from './auxiliar/Header';


const styles = {
    borda : {border: '1px solid black'},
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


function LoogedScreen(props) {
    
    const { route,navigation } = props
    const params = route.params
    const type = params.type
    console.log(type)
    return (
        <>
            <ScrollView>
                {
                    <Header></Header>
                }
                <View style={{flexDirection:"row" , justifyContent: 'space-around', width: '80%', alignItems: 'center'}}>
                    <View style={{flexDirection:"column"}}>

                    <Text>NOME:</Text>
                    {(type ===3) &&
                    <Text>Centro: </Text>}
                    </View>
                    <Avatar.Image size={40}  />
                </View>


                { (type ===0 || type === 1) && // DOADOR E VOLUNTÁRIO
                    <View style={styles.BoxButtons}>
                        <View style={styles.Buttons}>
                            <Button   title= "Perfil" onPress={() => navigation.navigate('Profile', {type: params.type})} />
                        </View>
                        <View style={styles.Buttons}>
                            <Button   title= "Acompanhamento" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                        <View style={styles.Buttons}>
                            <Button   title= "Sobre nós" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                    </View>
                }

                {(type ===3) && // ALUNO
                    <View style={styles.BoxButtons}>
                        <View style={styles.Buttons}>
                            <Button   title= "Perfil" onPress={() => navigation.navigate('Profile',{type: params.type})} />
                        </View>
                        <View style={styles.Buttons}>
                            <Button   title= "Aulas" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                        <View style={styles.Buttons}>
                            <Button   title= "Centro" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                            <View style={styles.Buttons}>
                        <Button  title= "Sobre nós" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                    </View> 
                }

                {(type ===2) &&
                    <View style={styles.BoxButtons}>
                        <View style={styles.Buttons}>
                            <Button   title= "Alunos" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                        <View style={styles.Buttons}>
                            <Button   title= "Professores e Aulas" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                        <View style={styles.Buttons}>
                            <Button   title= "Doadores" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                            <View style={styles.Buttons}>
                        <Button  title= "Sobre nós" onPress={() => navigation.navigate('LoginOuRegis')} />
                        </View>
                    </View> 
                }
            {
                // TAMBÉM IRÁ VIRAR UM COMPONENTE
                <Text> 
                    <Text>Referências</Text>
                </Text>
            }

            </ScrollView>
        </>

    );

}

export default LoogedScreen;