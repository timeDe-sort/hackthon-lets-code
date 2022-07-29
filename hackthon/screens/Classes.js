import { Avatar, Card, IconButton } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { View , Text, SafeAreaView } from 'react-native';  
import { styles } from './auxiliar/Styles';

function Classes(){



    return(
        <SafeAreaView style={styles.backGround}>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Próximas Aulas:  </Text>
                </View>
            <Card style={styles.card}>
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
            </Card >
            <Card style={styles.card}>
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

            <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Interesses sem professores:  </Text>
            </View>
            <Card style={styles.card}>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Title>Matérias Pendentes</Title>
                    </View>
                    <Paragraph>
                        Química , Biologia e Física {'\n'}
                    </Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default Classes;