import { View , ScrollView, Text, SafeAreaView, Pressable, Button} from 'react-native';  
import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import Header from './auxiliar/Header';
import React from 'react';

const styles = {
    borderSettings : {border: '1px solid black'},
    header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
    titleH1 : {fontSize: 30},
    titleH2 : {fontSize: 20},
    boxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black'},
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    boxButtons : {
        display: 'flex',
        justifyContent: 'center',
        width : "60%",
        marginLeft : "20%",
        marginTop : "0.5rem",
        marginBottom : "0.5rem"
    },  
    textInput: {
        height: 50, 
        marginBottom: "1rem" 

    }    
}



function Profile(props) {
    
    const { navigation, route } = props
    const params = route.params
    const type = params.type
    const [change, setChange] = React.useState(true);

    return (
        <>
            <ScrollView>
                <Header></Header>


                <View style={{flexDirection:"Column" , justifyContent: 'space-around', width: '100%', alignItems: 'center'}}>

                    <Avatar.Image size={60} style={styles.Buttons}/>

                    <Text style={styles.Buttons}>( NOME )</Text>  

                </View>
                
                <View>
                    <View >
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                            <TextInput
                            style={styles.textInput}
                            label="Email"
                            value={'email@dominio.com'}
                            disabled={change}
                            />
                            
                            <TextInput
                            style={styles.textInput}
                            label="Cidade"
                            value={'Fortaleza'}
                            disabled={change}
                            />
                        </View> 
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>
                            <TextInput
                            style={styles.textInput}
                            label="UF"
                            value={'CE'}
                            disabled={change}
                            />

                            <TextInput
                            style={styles.textInput}
                            label="CPF"
                            value={'000.000.000-11'}
                            disabled={change}
                            />
                        </View>
                        
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                            <TextInput
                            style={styles.textInput}
                            label="CEP"
                            value={'00070000'}
                            disabled={change}
                            />

                        </View>

                        { (type===0) &&// DOADOR
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>
                            <TextInput
                                style={styles.textInput}
                                label="Profissão"
                                value={'Professor'}
                                disabled={change}
                            />
                            <TextInput
                            style={styles.textInput}
                            label="Categoria de ajuda:"
                            value={'Material e financeira'}
                            disabled={change}
                            />


                        </View>
                        }
                        { (type===1) && // VOLUNTÁRIO
                            <>
                            
                                <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                    <TextInput
                                    style={styles.textInput}
                                    label="Disciplina Oferecida"
                                    value={'Matemática'}
                                    disabled={change}
                                    />
                                    <TextInput
                                    style={styles.textInput}
                                    label="Universidade"
                                    value={'UF'}
                                    disabled={change}
                                    />
                                </View>
                                <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>
                                    <TextInput
                                    style={styles.textInput}
                                    label="Periodo"
                                    value={'Matutino'}
                                    disabled={change}
                                    />
                                </View>

                            </>

                            
                        }
                        { (type === 3) &&// aluno
                            <>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                <TextInput
                                style={styles.textInput}
                                label="Escola"
                                value={'Escola de algum lugar'}
                                disabled={change}
                                />
                                <TextInput
                                style={styles.textInput}
                                label="Ano/Serie"
                                value={'6 ano/5ª Serie'}
                                disabled={change}
                                />
    
                            </View>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                <TextInput
                                style={styles.textInput}
                                label="Categora de ajuda"
                                value={'Material'}
                                disabled={change}
                                />
                                <TextInput
                                style={styles.textInput}
                                label="Período de estudo"
                                value={'Matutino'}
                                disabled={change}
                                />

                            </View>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                <TextInput
                                style={styles.textInput}
                                label="Nome da Mãe"
                                value={'Fulana'}
                                disabled={change}
                                />
                                <TextInput
                                style={styles.textInput}
                                label="Cadastro único"
                                value={'8239371'}
                                disabled={change}
                                />

                            </View>
                            </>
                        }

                    </View>


                </View>


                { change ?

                    <Button
                        title= "Alterar Dados"
                        onPress={() =>setChange(false)}>
                    </Button>
                :
                    <Button
                    title= "Ok"
                    onPress={() =>setChange(true)}>
                    </Button>

                }



                <Text> 
                    <Text>Referências</Text>
                </Text>


            </ScrollView>
        </>

    );

}

export default Profile;