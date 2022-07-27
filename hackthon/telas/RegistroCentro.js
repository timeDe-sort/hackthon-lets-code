import React from 'react';

import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  

const styles = {
    borda : {border: '1px solid black'}
}

function RegistrarCentro(props) {

    const { route,navigation } = props
    const params = route.params
    console.log(params)

    const [Email,   setEmail] = React.useState("");
    const [Senha,   setSenha] = React.useState("");
    const [Nome,   setNome] = React.useState("");

    return (
        <>

        
            <ScrollView>
                <Text > 
                    <Text >Nome do Aplicativo</Text>
                </Text>
                <SafeAreaView>

                    <View >
                        {/* COMUM A TODOS */}
                        <View>
                            <Text >Nome da Instituição:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setNome}
                            value={Nome}
                            />
                        </View>

                        <View>
                            <Text >CNPJ:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        <View>
                            <Text >Endereço:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        <View>
                            <Text >Bairro:</Text>
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

                        <View>
                            <Text >Cidade:</Text>
                            <TextInput
                            style={styles.borda}
                            onChangeText={setEmail}
                            value={Email}
                            />
                        </View>

                        <View>
                            <Text >UF:</Text>
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
                            secureTextEntry={true}
                            textContentType="password"
                            />
                        </View>

                    </View>
                </SafeAreaView>


                <Button title="Finalizar" onPress={() => navigation.navigate('TelaInicial')} />

            
                <Text> 
                    Referências
                </Text>
            </ScrollView>


        </>

  );
}

export default RegistrarCentro;
