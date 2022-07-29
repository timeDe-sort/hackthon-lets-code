import React from 'react';
import { Checkbox } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView} from 'react-native';  
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './auxiliar/Header';
import BootstrapDatePickerComponent from './BootstrapDatePickerComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { StudentRegister } from './auxiliar/Student';
import { VolunteerRegister } from './auxiliar/Volunteer';
import { DonatorRegister } from './auxiliar/Donator';
import DistrictDropdown from './form-components/DistrictsDropdownComponent';

const styles = {
    header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
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



function RegisterUser(props) {

    const { route,navigation } = props
    const params = route.params
    console.log(params)

    const [name, setName] = React.useState("");
    const [cpf, setCpf] = React.useState("");
    const [age, setAge] = React.useState("");
    const [cep, setCep] = React.useState("");
    const [city, setCity] = React.useState("");
    const [observationField, setObservationField] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    function finishRegistration(){
        navigation.navigate('LoggedScreen', {type: params.type})
        setName("")
        setCep("")
        setCpf("")
        setAge("")
        setCity("")
        setObservationField("")
        setEmail("")
        setPassword("")
    }
    return (
        <>
            <ScrollView>
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
                            onChangeText={setCpf}
                            value={cpf}
                            label="CPF"
                            />
                        </View>
                        <View>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setAge}
                            value={age}
                            label="Idade"
                            />
                        </View>
                        <View>
                            <SafeAreaView style={styles.textInput}>
                            <Text>
                                Data de Aniversário:    
                            </Text>
                                <BootstrapDatePickerComponent /> 
                            </SafeAreaView>
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
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setObservationField}
                            value={observationField}
                            label="Observação"
                            />
                        </View>
                        <SafeAreaView>
                            <DistrictDropdown>

                            </DistrictDropdown>
                        </SafeAreaView>
                        {
                            (params.type === 0) &&
                            <DonatorRegister>

                            </DonatorRegister>
                        }
                        { (params.type === 1) &&
                            <VolunteerRegister>

                            </VolunteerRegister>
                        }
                        {
                            (params.type === 3) &&
                            <StudentRegister>
                            </StudentRegister>
                        }

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
                <Button title="Finalizar" onPress={finishRegistration} />
                </View>
            
            </ScrollView>




        </>

  );
}

export default RegisterUser;
