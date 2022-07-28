import React from 'react';
import DistrictDropdown from './form-components/DistrictsDropdownComponent';
import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  

const styles = {
    borderSettings : {border: '1px solid black'}
}

function RegisterServiceCenter(props) {

    const { route, navigation } = props
    const params = route.params
    console.log(params)

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [cnpj, setCnpj] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [district, setDistrict] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [city, setCity] = React.useState("");


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
                            style={styles.borderSettings}
                            onChangeText={setName}
                            value={name}
                            />
                        </View>
                        <View>
                            <Text >CNPJ:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setCnpj}
                            value={cnpj}
                            />
                        </View>
                        <View>
                            <Text >Endereço:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setAddress}
                            value={address}
                            />
                        </View>
                        <View>
                            <Text >Bairro:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setDistrict}
                            value={district}
                            />
                        </View>
                        <View>
                            <Text >CEP:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setCep}
                            value={cep}
                            />
                        </View>
                        <View>
                            <Text >Cidade:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setCity}
                            value={city}
                            />
                        </View>
                        <View>
                            <DistrictDropdown></DistrictDropdown>
                        </View>
                        <View>
                            <Text >Email:</Text>
                            <TextInput
                            style={styles.borderSettings}
                            onChangeText={setEmail}
                            value={email}
                            />
                        </View>
                        <View>
                            <Text>Senha:</Text>
                            <TextInput
                            onChangeText={setPassword}
                            style={styles.borderSettings}
                            value={password}
                            secureTextEntry={true}
                            textContentType="password"
                            />
                        </View>
                    </View>
                </SafeAreaView>

                <Button title="Finalizar" onPress={() => navigation.navigate('LoogedScreen', {type: params.type})} />

                <Text> 
                    Referências
                </Text>
            </ScrollView>


        </>

  );
}

export default RegisterServiceCenter;
