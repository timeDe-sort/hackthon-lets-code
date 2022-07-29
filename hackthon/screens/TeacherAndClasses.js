import { Avatar, Card } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { View , SafeAreaView,Text, ScrollView  } from 'react-native';  
import { styles } from './auxiliar/Styles';


function TeacherAndClasses(){



    return(
        <SafeAreaView style={styles.backGround}>
            <ScrollView>
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
                            Turma da Matemática Qua e Sex{'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
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
            </ScrollView>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Turmas com Vagas:  </Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60}></Avatar.Image>
                            <Title>    Professora Paulinha</Title>
                        </View>
                        <Paragraph>
                            Turma da Física Qua e Sex 16h{'\n'}
                            5 vagas restantes
                        </Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TeacherAndClasses;