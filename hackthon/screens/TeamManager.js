
import { List, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View , SafeAreaView,Text ,Pressable } from 'react-native';  
import { styles } from './auxiliar/Styles';

export function TeamManager(){




    return(
        <>
            <SafeAreaView style={styles.backGround}>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60} style={styles.avatar}></Avatar.Image>
                            <Title>
                                Professora Paulinha
                            </Title>
                        </View>
                        <Paragraph>
                            Matéria: Física Qua e Sex 16h{'\n'}
                            Dias: Quarta e Sexta{'\n'}
                            Horário: 16h - 18h {'\n'}
                            5 vagas restantes
                        </Paragraph>
                    </Card.Content>
                </Card>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Alunos interessados:  </Text>
                </View>
                <View style={{width:"80%", marginLeft:"10%"}}>
                    <List.Item
                        style={styles.listItem}
                        title="Joãozinho"
                        description="Disponibilidade: Turno da Tarde"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => 
                            <Pressable>
                            <List.Icon {...props} icon="plus-circle" />
                            </Pressable>
                        }
                        />
                    <List.Item
                        style={styles.listItem}
                        title="Mariazinha"
                        description="Disponibilidade: Turno da Manhã"
                        left={props => <List.Icon {...props} icon="folder" />}
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


