import { Avatar, Card, IconButton } from 'react-native-paper';
import * as React from 'react';
import { Title, Paragraph } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView } from 'react-native';  
import { styles } from './auxiliar/Styles';


function Accompaniment(){



    return(
      <ScrollView style={styles.backGround}>
        <Card style={styles.card}>
          <Card.Content>  
              <View style={{ flexDirection: "row", alignItems: 'center'}}>
                  <Title>    Aluno Joãozinho</Title>
              </View>
              <Paragraph>
                Aulas de Matemática ás quintas {'\n'}
                Recebeu um material escolar (Cadernos , lápis e canetas)
              </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    )
}

export default Accompaniment;