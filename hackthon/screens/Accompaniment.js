import { Avatar, Card, IconButton } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView } from 'react-native';  

function Accompaniment(){



    return(

        <Card>
        <Card.Content>  
            <View style={{ flexDirection: "row", alignItems: 'center'}}>
                <Avatar.Image size={60}></Avatar.Image>
                <Title>    Aluno Joãozinho</Title>
            </View>
          <Paragraph>
            Aulas de Matemática ás quintas {'\n'}
            Recebeu um material escolar (Cadernos , lápis e canetas)
          </Paragraph>
        </Card.Content>
      </Card>
    )
}

export default Accompaniment;