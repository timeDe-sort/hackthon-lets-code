import React from 'react';

import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  

const styles = {
    borda : {border: '1px solid black'}
}

function Registrar(props) {

    const { route,navigation } = props
    const params = route.params
    console.log(params)

    const [Email,   setEmail] = React.useState("");
    const [Senha,   setSenha] = React.useState("");
    const [Nome,   setNome] = React.useState("");
    const [Universidade,   setUniversidade] = React.useState("");
    const [Disciplina,   setDisciplina] = React.useState("");

    return (
        <>

        
            <ScrollView>
                <Text > 
                    <Text >Nome do Aplicativo</Text>
                </Text>
                <SafeAreaView>

                    <View >
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
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        <View>
                            <Text >Data de Nascimento:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        <View>
                            <Text >CEP:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        {(params.info===0) &  // DOADOR
                        <View>
                            <Text >Profissão:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View> & 
                        <View>
                            <Text >Categoria de Ajuda:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>}

                        {(params.info===1) &   // UNIVERSITÁRIO
                        <View>
                            <Text >Universidade:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setUniversidade}
                            value={Universidade}
                            />
                        </View> & 
                        <View>
                            <Text >Disciplina:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setDisciplina}
                            value={Disciplina}
                            />
                        </View>}


                        <View>
                            <Text >Login:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        <View>
                            <Text >Observação:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

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
                            placeholder="placeholder"
                            secureTextEntry={true}
                            textContentType="password"
                            />
                        </View>
                    </View>
                </SafeAreaView>


                <Button title="Entrar"onPress={() => navigation.navigate('TelaInicial')} />

            
                <Text>
                    Referências
                </Text>
            </ScrollView>
        </>

  );
}

export default Registrar;
