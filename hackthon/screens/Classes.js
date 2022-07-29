import { Avatar, Card, IconButton } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView } from 'react-native';  

function Classes(){



    return(
        <SafeAreaView>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>    Professor Pedrinho</Title>
                    </View>
                    <Paragraph>
                        Aulas de Matemática do centro (insira um nome) às 14h{'\n'}
                        Quarta 
                    </Paragraph>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>    Professora Rebecca</Title>
                    </View>
                    <Paragraph>
                        Aulas de Redação do centro Tal às 10h {'\n'}
                        Terça
                    </Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default Classes;