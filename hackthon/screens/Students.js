import { Avatar, Card } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { View , SafeAreaView } from 'react-native';  

function Students(){



    return(
        <SafeAreaView>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>    Aluno Pedrinho</Title>
                    </View>
                    <Paragraph>
                        Turma da Matemática Ter e Qui{'\n'}
                        Recebeu Material Escolar
                    </Paragraph>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>    Aluna Rebecca</Title>
                    </View>
                    <Paragraph>
                        Turma da Matemática Seg e Qua {'\n'}
                        Recebeu auxilio financeiro
                    </Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default Students;