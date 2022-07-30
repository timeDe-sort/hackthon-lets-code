import {View , ScrollView, Text } from 'react-native';  
import { Avatar } from 'react-native-paper';
import Header from './auxiliar/Header';
import { Button } from 'react-native-paper';
import { styles } from './auxiliar/Styles';


function LoggedScreen(props) {
    
    const { route,navigation } = props
    const params = route.params
    const type = params.type
    console.log(type)
    
    return (
        <>
            <ScrollView style={styles.backGround} >
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
                <>
                    
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Profile', {type: 1})}>
                                Perfil
                            </Button>
                        </View>
                    </View>
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Accompaniment',{type: 1})}>
                                Acompanhamento
                            </Button>
                        </View>
                    </View>

                </>
                }

                { (type === 0) &&
                <>       
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Profile',{type: 0})}>
                                Perfil
                            </Button>
                        </View>
                    </View>
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Accompaniment',{type: 0})}>
                                Acompanhamento
                            </Button>
                        </View>
                    </View>
                </>
             

                }

                {(type ===3) && 
                <>
                
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Profile',{type:3})}>
                                Perfil
                            </Button>
                        </View>
                    </View>
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Classes',{type:3})}>
                                Aulas
                            </Button>
                        </View>
                    </View> 

                </>
  
                }

                {(type ===2) &&
                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Students')}>
                                Alunos
                            </Button>
                        </View>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('TeacherAndClasses')}>
                                Aulas e Professores
                            </Button>
                        </View>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('Donators')}>
                                Doações
                            </Button>
                        </View>
                     </View> 
                }

                    <View style={styles.boxButtons}>
                        <View style={styles.buttons}>
                            <Button   color={'#272343'} onPress={() => navigation.navigate('AboutUs')}>
                                Sobre nós
                            </Button>
                        </View>
                    </View>

            </ScrollView>
        </>

    );

}

export default LoggedScreen;