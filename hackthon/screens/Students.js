import { Avatar, Card,Title, Paragraph  } from 'react-native-paper';
import * as React from 'react';
import { View , SafeAreaView,Pressable } from 'react-native';  
import { styles } from './auxiliar/Styles';


export function Students(props){

    const { navigation } = props 
    
    return(
        <SafeAreaView style={styles.backGround}>
            <Card style={styles.card}>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60} style={styles.avatar}></Avatar.Image>
                            <Pressable onPress={() => navigation.navigate('StudentProfileCenter')}>
                                <Title>Aluno Joãozinho</Title>
                            </Pressable>
                    </View>
                    <Paragraph>
                        Turma da Matemática Ter e Qui 14h{'\n'}
                        Recebeu Material Escolar
                    </Paragraph>
                </Card.Content>
            </Card>
            <Card style={styles.card}>
                <Card.Content>  
                    <View style={{ flexDirection: "row", alignItems: 'center'}}>
                        <Avatar.Image size={60} style={styles.avatar}></Avatar.Image>
                        <Title>Aluna Mariazinha</Title>
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
