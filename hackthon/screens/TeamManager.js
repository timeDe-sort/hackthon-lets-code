
import { List, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View , SafeAreaView,Text ,Pressable } from 'react-native';  
import { styles } from './auxiliar/Styles';

export function TeamManager(props){
    const { navigation, route } = props
    const params = route.params

    return(
        <>
            <SafeAreaView style={styles.backGround}>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60} style={styles.avatar} source={require('../img/professoraPaulinha.jpg')}></Avatar.Image>
                            <Title>
                                Professora Paula
                            </Title>
                        </View>
                        <Paragraph>
                            Matéria: Física Ter e Sex 16h{'\n'}
                            Dias: Terça e Sexta{'\n'}
                            Horário: 16h - 18h {'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Alunos interessados:  </Text>
                </View>
                <View style={{width:"80%", marginLeft:"10%"}}>
                    {
                        (!params.atribuido) &&
                        <List.Item
                        style={styles.listItem}
                        title="Joãozinho"
                        description="Disponibilidade: Turno da Tarde"
                        right={props => 
                            <Pressable onPress={() => navigation.navigate('ConfirmClass')}>
                            <List.Icon {...props} icon="plus-circle" />
                            </Pressable>
                        }
                        />

                    }
                    <List.Item
                        style={styles.listItem}
                        title="Mariazinha"
                        description="Disponibilidade: Turno da Manhã"
                        right={props => 
                            <Pressable>
                            <List.Icon {...props} icon="plus-circle" />
                            </Pressable>
                        }
                        
                        />
                </View>
            </SafeAreaView>
        </>
    
        )
}


