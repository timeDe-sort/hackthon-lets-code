
import { List, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { View , SafeAreaView,Text ,Pressable } from 'react-native';  
import { styles } from './auxiliar/Styles';

export function DonationManager(props){
    const { navigation } = props
    
    return(
        <>
            <SafeAreaView style={styles.backGround}>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60} style={styles.avatar}></Avatar.Image>
                            <Title>
                                José
                            </Title>
                        </View>
                        <Paragraph>
                            Doador de material escolar para os alunos{'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}> Itens doados:  </Text>
                </View>
                <View style={{width:"80%", marginLeft:"10%"}}>
                    <List.Item
                        style={styles.listItem}
                        title="Materiais disponíveis:"
                        description="Cadernos, canetas, lápis e borrachas"
                        left={props => <List.Icon {...props} icon="folder" />}  
                        />
                </View>

                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}> Alunos:  </Text>
                </View>

                <View style={{width:"80%", marginLeft:"10%"}}>
                    <List.Item
                        style={styles.listItem}
                        title="Joãozinho:"
                        description="Precisa de : Cadernos"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => 
                            <Pressable onPress={() => navigation.navigate('ConfirmDonation')}>
                            <List.Icon {...props} icon="plus-circle" />
                            </Pressable>
                        }
                        />
                </View>
            </SafeAreaView>
        </>
    
        )
}


