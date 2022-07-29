import { Avatar, Card } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { View , SafeAreaView } from 'react-native';  

function TeacherAndClasses(){



    return(
        <SafeAreaView>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>    Professor Pedrinho</Title>
                    </View>
                    <Paragraph>
                        Turma da Matemática Qua e Sex{'\n'}
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
                        Turma de Redação Seg e Qua {'\n'}
                    </Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default TeacherAndClasses;