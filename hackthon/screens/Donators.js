import { Avatar, Card } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { View , SafeAreaView,Text,Pressable } from 'react-native';  
import { styles } from './auxiliar/Styles';

function Donators(props){
    const {navigation} = props;



    return(
        <SafeAreaView style={styles.backGround}>
            <View>
                <View style={{ flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={styles.text}>  Doações Pendentes:  </Text>
                </View>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60} style={styles.avatar} source={require('../img/Rogerio.jpg')}></Avatar.Image>
                            <Pressable onPress={() => navigation.navigate('DonationManager', {atribuido: false})}>
                                    <Title>
                                    Doador Rogério
                                    </Title>
                                </Pressable>
                        </View>
                        <Paragraph>
                            Doou material escolar para os alunos{'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
            <View>
                <Card style={styles.card}>
                    <Card.Content>  
                        <View style={{ flexDirection: "row", alignItems: 'center'}}>
                            <Avatar.Image size={60} style={styles.avatar} source={require('../img/Clara.jpg')}></Avatar.Image>
                            <Title>Doadora Clara</Title>
                        </View>
                        <Paragraph>
                            Doou auxilio financeiro para os alunos {'\n'}
                        </Paragraph>
                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    )
}

export default Donators;