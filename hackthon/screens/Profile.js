import { Button , View , ScrollView, Text, SafeAreaView, Pressable} from 'react-native';  
import { Avatar } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import Header from './auxiliar/Header';

const styles = {
    borda : {border: '1px solid black'},
    header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
    tituloh1 : {fontSize: 30},
    tituloh2 : {fontSize: 20},
    BoxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid black'},
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    BoxButtons : {
        display: 'flex',
        justifyContent: 'center',
        width : "60%",
        marginLeft : "20%",
        marginTop : "1.5rem",
    },    
    Buttons : {
        margin: "1rem"
        
    },
    TextInput: {
        height: "25", 
        marginBottom: "1rem" 

    }
}


function Profile(props) {
    
    const { navigation } = props
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
                            style={styles.TextInput}
                            label="Email"
                            value={'email@dominio.com'}
                            />
                            
                            <TextInput
                            style={styles.TextInput}
                            label="Cidade"
                            value={'Fortaleza'}
                            />
                        </View> 
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>
                            <TextInput
                            style={styles.TextInput}
                            label="UF"
                            value={'CE'}
                            disabled={true}
                            />

                            <TextInput
                            style={styles.TextInput}
                            label="CPF"
                            value={'000.000.000-11'}
                            disabled={true}
                            />
                        </View>
                        
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                            <TextInput
                            style={styles.TextInput}
                            label="CEP"
                            value={'00070000'}
                            disabled={true}
                            />

                        </View>

                        { (type===0) &&// DOADOR
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>
                            <TextInput
                                style={styles.TextInput}
                                label="Profissão"
                                value={'Professor'}
                                disabled={true}
                            />
                            <TextInput
                            style={styles.TextInput}
                            label="Categoria de ajuda:"
                            value={'Material e financeira'}
                            disabled={true}
                            />


                        </View>
                        }
                        { (type===1) && // VOLUNTÁRIO
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                <TextInput
                                style={styles.TextInput}
                                label="Disciplina Oferecida"
                                value={'Matemática'}
                                disabled={true}
                                />
                                <TextInput
                                style={styles.TextInput}
                                label="Universidade"
                                value={'UF'}
                                disabled={true}
                                />
                                <TextInput
                                style={styles.TextInput}
                                label="Periodo"
                                value={'Matutino'}
                                disabled={true}
                                />

                            </View>
                        }
                        { (type === 2) &&// aluno
                            <>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                <TextInput
                                style={styles.TextInput}
                                label="Escola"
                                value={'Escola de algum lugar'}
                                disabled={true}
                                />
                                <TextInput
                                style={styles.TextInput}
                                label="Ano/Serie"
                                value={'6 ano/5ª Serie'}
                                disabled={true}
                                />
    
                            </View>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                <TextInput
                                style={styles.TextInput}
                                label="Categora de ajuda"
                                value={'Escola de algum lugar'}
                                disabled={true}
                                />
                                <TextInput
                                style={styles.TextInput}
                                label="Período de estudo"
                                value={'Matutino'}
                                disabled={true}
                                />

                            </View>
                            <View style={{flexDirection:'row', justifyContent: 'space-evenly' }}>

                                <TextInput
                                style={styles.TextInput}
                                label="Nome da Mãe"
                                value={'Fulana'}
                                disabled={true}
                                />
                                <TextInput
                                style={styles.TextInput}
                                label="Cadastro único"
                                value={'8239371'}
                                disabled={true}
                                />

                            </View>
                            </>
                        }

                    </View>


                </View>



                <Text> 
                    <Text>Referências</Text>
                </Text>


            </ScrollView>
        </>

    );

}

export default Profile;