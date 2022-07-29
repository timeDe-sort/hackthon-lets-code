import { Avatar, Card } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { View , SafeAreaView } from 'react-native';  

function Donators(){



    return(
        <SafeAreaView>
            <View>
            
                <Card>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60}></Avatar.Image>
                            <Title>    Doador José</Title>
                        </View>
                        <Paragraph>
                            Doou material escolar para os alunos{'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
            <Card>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60}></Avatar.Image>
                        <Title>    Doadora Rebecca</Title>
                    </View>
                    <Paragraph>
                        Doou auxilio financeiro para os alunos {'\n'}
                    </Paragraph>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

export default Donators;