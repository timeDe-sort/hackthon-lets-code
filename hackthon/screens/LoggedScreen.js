import { Button , View , ScrollView, Text, SafeAreaView,TextInput, Pressable} from 'react-native';  
import { Avatar } from 'react-native-paper';
import Header from './auxiliar/Header';
import AboutUs from './AboutUs';

const styles = {
    header : {alignItems: 'center', justifyContent: 'center', backgroundColor: 'aquamarine', display:'flex' },
    titleH1 : {fontSize: 30},
    titleH2 : {fontSize: 20},
    boxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: "1px solid black"},
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


function LoggedScreen(props) {
    
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
                <View style={{flexDirection:"row" , justifyContent: 'space-between', width: '80%', alignItems: 'center',marginLeft:"10%", marginTop:"1rem"}}>
                    <View style={{flexDirection:"column"}}>

                    <Text>NOME:</Text>
                    {(type ===3) &&
                    <Text>Centro: </Text>}
                    </View>
                    <Avatar.Image size={80}  />
                </View>


                { (type === 1) &&
                
                <View style={styles.boxButtons}>
                    <View style={styles.buttons}>
                        <Button   title= "Perfil" onPress={() => navigation.navigate('Profile', {type: 1})} />
                    </View>
                    <View style={styles.buttons}>
                        <Button   title= "Acompanhamento" onPress={() => navigation.navigate('Accompaniment',{type: 1})} />
                    </View>
                    <View style={styles.buttons}>
                        <Button   title= "Sobre nós" onPress={() => navigation.navigate('AboutUs')} />
                    </View>
                </View>
                }

                { (type === 0) &&
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   title= "Perfil" onPress={() => navigation.navigate('Profile',{type: 0})} />
                        </View>
                        <View style={styles.buttons}>
                            <Button   title= "Acompanhamento" onPress={() => navigation.navigate('Accompaniment',{type: 0})} />
                        </View>
                        <View style={styles.buttons}>
                            <Button   title= "Sobre nós" onPress={() => navigation.navigate('AboutUs')} />
                        </View>
                    </View>
             

                }

                {(type ===3) && 
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   title= "Perfil" onPress={() => navigation.navigate('Profile',{type:3})} />
                        </View>
                        <View style={styles.buttons}>
                            <Button   title= "Aulas" onPress={() => navigation.navigate('Classes',{type:3})} />
                        </View>
                        <View style={styles.buttons}>
                        <Button  title= "Sobre nós" onPress={() => navigation.navigate('AboutUs')} />
                        </View>
                    </View> 
  
                }

                {(type ===2) &&
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   title= "Alunos" onPress={() => navigation.navigate('Students')} />
                        </View>
                        <View style={styles.buttons}>
                            <Button   title= "Professores e Aulas" onPress={() => navigation.navigate('TeacherAndClasses')} />
                        </View>
                        <View style={styles.buttons}>
                            <Button   title= "Doadores" onPress={() => navigation.navigate('Donators')} />
                        </View>
                            <View style={styles.buttons}>
                        <Button  title= "Sobre nós" onPress={() => navigation.navigate('AboutUs')} />
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

export default LoggedScreen;