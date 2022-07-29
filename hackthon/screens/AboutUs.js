import { Avatar, Card, IconButton } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView } from 'react-native';  

function AboutUs(){



    return(
        <SafeAreaView>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>Quem somos?</Title>
                    </View>
                    <Paragraph>
                        Somos um grupo de 3 pessoas formado por Ana Clara, Brunha Luchini e Lincoln Rodrigo {'\n'}
                        E estamos participando do Hackathon da Let's Code, após o final do curso Vem ser Tech - Ifood   
                    </Paragraph>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>Quall nossos objetivos?</Title>
                    </View>
                    <Paragraph>
                        Viemos ,por meio desse Hakathon cujo tema é "Democratização da educação", transmitir a nossa ideia com o objetivo de ser mais igualitário  {'\n'}
                        com a educação. Bem vindo ao Fada-Madrinha!!! Um aplicativo para crianças e estudantes de baixa renda que necessitam de ajuda para ser alfabetizados {'\n'}
                        ou para continuar os Estudos
                    </Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default AboutUs;