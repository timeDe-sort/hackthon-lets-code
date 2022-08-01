import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import * as React from 'react';
import { View , SafeAreaView,Text, ScrollView ,Pressable } from 'react-native';  
import { styles } from './auxiliar/Styles';


function TeacherAndClasses(props){
    const { navigation } = props
    return(
        <SafeAreaView style={styles.backGround}>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Próximas Aulas:  </Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60}  style={styles.avatar} source={require('../img/ProfessorPedrinho.jpg')}></Avatar.Image>
                            <Title>Professor Pedro</Title>
                        </View>
                        <Paragraph>
                            Turma da Matemática Qua e Sex{'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60}  style={styles.avatar} source={require('../img/ProfessoraRebecca.jpg')}></Avatar.Image>
                            <Title>Professora Rebecca</Title>
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
                            <Avatar.Image size={60} style={styles.avatar} source={require('../img/professoraPaulinha.jpg')}></Avatar.Image>
                                <Pressable onPress={() => navigation.navigate('TeamManager', {atribuido : false})}>
                                    <Title>
                                        Professora Paula
                                    </Title>
                                </Pressable>
                        </View>
                        <Paragraph>
                            Turma da Física Ter e Sex 16h{'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TeacherAndClasses;