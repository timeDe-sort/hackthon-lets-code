
import { List, Card, Title, Paragraph, Avatar,Button } from 'react-native-paper';
import { View , SafeAreaView,Text  } from 'react-native';  
import { styles } from './auxiliar/Styles';

export function ConfirmDonation(props){
    const {navigation} = props

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
                        Materiais disponíveis: Cadernos, canetas, lápis e borrachas{'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  CONFIRMAR A DOAÇÃO PARA O ALUNO:  </Text>
                </View>
                <View style={{width:"80%", marginLeft:"10%"}}>
                    <List.Item
                        style={styles.listItem}
                        title="Joãozinho"
                        description="Precisa de : Cadernos"
                        left={props => <List.Icon {...props} icon="folder" />}
                        />

                </View>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Confirma?  </Text>
                </View>
                <SafeAreaView style={{flexDirection:"row", justifyContent:'space-between'}}>
                        <View style={styles.buttons}>
                            <Button color={'#272343'} onPress={() => navigation.navigate('DonationManager')}>
                            Sim
                            </Button>
                        </View>

                        <View style={styles.buttons}>
                            <Button color={'#272343'}>
                            Não
                            </Button>
                        </View>

                </SafeAreaView>
            </SafeAreaView>
        </>
    
        )
}


