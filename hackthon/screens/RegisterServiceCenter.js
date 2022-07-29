import React from 'react';
import { View , ScrollView, Text, SafeAreaView} from 'react-native';  
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './auxiliar/Header';
import { TextInput, Button } from 'react-native-paper';
import { styles } from './auxiliar/Styles';



const states = [
    {label : "AC" , value : "AC"},
    {label : "AL" , value : "AL"},
    {label : "AP" , value : "AP"},
    {label : "AM" , value : "AM"},
    {label : "BA" , value : "BA"},
    {label : "CE" , value : "CE"},
    {label : "DF" , value : "DF"},
    {label : "ES" , value : "ES"},
    {label : "GO" , value : "GO"},
    {label : "MA" , value : "MA"},
    {label : "MT" , value : "MT"},
    {label : "MS" , value : "MS"},
    {label : "MG" , value : "MG"},
    {label : "PA" , value : "PA"},
    {label : "PB" , value : "PB"},
    {label : "PR" , value : "PR"},
    {label : "PE" , value : "PE"},
    {label : "PI" , value : "PI"},
    {label : "RJ" , value : "RJ"},
    {label : "RN" , value : "RN"},
    {label : "RS" , value : "RS"},
    {label : "RO" , value : "RO"},
    {label : "RR" , value : "RR"},
    {label : "SC" , value : "SC"},
    {label : "SP" , value : "SP"},
    {label : "SE" , value : "SE"},
    {label : "TO" , value : "TO"},
]
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

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState(states);


    return (
        <>
            <ScrollView style={styles.backGround}>
                <Header></Header>

                <SafeAreaView>

                    <View >
                        <View>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setName}
                            value={name}
                            label="Nome"
                            />
                        </View>
                        <View>
                           
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setCnpj}
                            value={cnpj}
                            label="CNPJ"
                            />
                        </View>
                        <View>
                           
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setAddress}
                            value={address}
                            label="Endereço"
                            />
                        </View>
                        <View>
                           
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setDistrict}
                            value={district}
                            label="Bairro"
                            />
                        </View>
                        <View>
                           
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setCep}
                            value={cep}
                            label="CEP"
                            />
                        </View>
                        <View>
                           
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setCity}
                            value={city}
                            label="Cidade"
                            />
                        </View>
                        <View>

                        <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        searchable={true}
                        dropDownDirection="TOP"
                        searchTextInputProps={{
                            maxLength: 25
                        }}
                        containerStyle={{
                            width: "20%",
                        }}
                        />
                        </View>

                        <View>
                           
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setEmail}
                            value={email}
                            label="Email"
                            />
                        </View>
                        <View>
                            <TextInput
                            onChangeText={setPassword}
                            style={styles.textInput}
                            value={password}
                            secureTextEntry={true}
                            textContentType="password"
                            label="Senha"
                            />
                        </View>
                    </View>
                
                </SafeAreaView>


                <View style={styles.boxButtons}>
                    <View style={styles.buttons}>
                        <Button color={'#272343'}  onPress={() => navigation.navigate('LoggedScreen', {type: params.type})}>
                            Finalizar
                        </Button>
                    </View>
                </View>
                        
            </ScrollView>


        </>

  );
}

export default RegisterServiceCenter;
