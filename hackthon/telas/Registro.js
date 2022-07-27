import React from 'react';

import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  

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
        marginTop : "0.5rem",
        marginBottom : "0.5rem"
    },
    Buttons : {
        
    }

  
}

function Registrar(props) {

    const { route,navigation } = props
    const params = route.params
    console.log(params)

    const [Nome,   setNome] = React.useState("");
    const [CPF,   setCPF] = React.useState("");
    const [Idade,   setIdade] = React.useState(null);
    const [CEP,   setCEP] = React.useState("");
    const [Cidade,   setCidade] = React.useState("");
    const [Observacao,   setObservacao] = React.useState("");
    const [Profissao,   setProfissao] = React.useState("");
    const [Email,   setEmail] = React.useState("");
    const [Senha,   setSenha] = React.useState("");
    const [Universidade,   setUniversidade] = React.useState("");
    const [Disciplina,   setDisciplina] = React.useState("");
    const [Escola,   setEscola] = React.useState("");
    const [Serie,   setSerie] = React.useState("");
    const [Mae,   setMae] = React.useState("");
    const [Codigo,   setCodigo] = React.useState("");

    return (
        <>

        
            <ScrollView>
            <Text  style={styles.header}> 
                <Text style={styles.tituloh1}>Nome do Aplicativo</Text>
            </Text>
                <SafeAreaView>

                    <View >
                        {/* COMUM A TODOS */}
                        <View>
                            <Text >Nome:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setNome}
                            value={Nome}
                            />
                        </View>

                        <View>
                            <Text >CPF:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setCPF}
                            value={CPF}
                            />
                        </View>

                        <View>
                            <Text >idade:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setIdade}
                            value={Idade}
                            />
                        </View>

                        <View>
                            <Text >Data de Nascimento:</Text>
                            <TextInput
                            style={styles.borda}
                            />
                        </View>

                        <View>
                            <Text >CEP:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setCEP}
                            value={CEP}
                            />
                        </View>

                        <View>
                            <Text >Cidade:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setCidade}
                            value={Cidade}
                            />
                        </View>

                        <View>
                            <Text >UF:</Text>
                            <TextInput
                            style={styles.borda}
                            />
                        </View>

                        <View>
                            <Text >Observação:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setObservacao}
                            value={Observacao}
                            />
                        </View>

                        {(params.tipo === 0) && // DOADOR
                        <View>  
                            <View>
                                <Text >Profissão:</Text>
                                <TextInput
                                style={styles.borda}
                                onChangeText={setProfissao}
                                value={Profissao}
                                />
                            </View>
                            <View>
                                <Text >Categoria de Ajuda:</Text>
                                <TextInput
                                style={styles.borda}
                                />
                            </View>
                        </View>}

                        {(params.tipo===1) && // UNIVERSITÁRIO
                        <View>    
                            <View>
                                <Text >Universidade:</Text>
                                <TextInput
                                style={styles.borda}
                                onChangeText={setUniversidade}
                                value={Universidade}
                                />
                            </View>
                            <View>
                                <Text >Disciplina oferecida:</Text>
                                <TextInput
                                style={styles.borda}
                                onChangeText={setDisciplina}
                                value={Disciplina}
                                />
                            </View>
                            <View>
                                <Text >Período:</Text>
                                <TextInput
                                style={styles.borda}
                                />
                            </View>
                        </View>}

                        {(params.tipo===3) && // ALUNO
                        <View>
                            <View>
                            <Text >Escola:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEscola}
                            value={Escola}
                            />
                            </View> 
                            <View>
                            <Text >Ano:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setSerie}
                            value={Serie}
                            />
                            </View> 
                            <View>
                            <Text >Período:</Text>
                            <TextInput
                            style={styles.borda}
                            />
                            </View> 
                            <View>
                            <Text >Nome da Mãe:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setMae}
                            value={Mae}
                            />
                            </View> 
                            <View>
                            <Text >Código familiar:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setCodigo}
                            value={Codigo}
                            />
                            </View>
                        </View>
                        }
                        <View>
                            <Text >Email:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        <View>
                            <Text>Senha:</Text>
                            <TextInput
                            onChangeText={setSenha}
                            style={styles.borda}
                            value={Senha}
                            secureTextEntry={true}
                            textContentType="password"
                            />
                        </View>

                    </View>
                </SafeAreaView>


                <View style={styles.BoxButtons}>
                <Button title="Finalizar" onPress={() => navigation.navigate('TelaInicial')} />
                </View>
            
                <Text style={styles.header}> 
                    Referências
                </Text>
            </ScrollView>


        </>

  );
}

export default Registrar;
