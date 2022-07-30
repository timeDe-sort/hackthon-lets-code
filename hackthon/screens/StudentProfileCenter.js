
import { List, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View , SafeAreaView,Text ,Pressable } from 'react-native';  
import { styles } from './auxiliar/Styles';

export function StudentProfileCenter(){

    return(
        <>
            <SafeAreaView style={styles.backGround}>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60} style={styles.avatar}></Avatar.Image>
                            <Title>
                                Joãozinho
                            </Title>
                        </View>
                        <Paragraph>
                            Turmas: Matemática Terça e Quinta 14h-16h {'\n'}
                            Horário: 16h - 18h {'\n'}   
                        </Paragraph>
                    </Card.Content>
                </Card>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>Ajudas: </Text>
                </View>
                <View style={{width:"80%", marginLeft:"10%"}}>
                    <List.Item
                        style={styles.listItem}
                        title="Aulas de Física"
                        description="Disponibilidade: Turno da Tarde Quartas e Sextas"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => 
                            <Pressable>
                            <List.Icon {...props} icon="plus-circle" />
                            </Pressable>
                        }
                        />
                    <List.Item
                        style={styles.listItem}
                        title="Material"
                        description="Necessidades: Caneta e Borracha"
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


