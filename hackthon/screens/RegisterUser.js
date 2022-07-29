import React from 'react';
import { Checkbox } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView} from 'react-native';  
import { TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Header from './auxiliar/Header';
import BootstrapDatePickerComponent from './BootstrapDatePickerComponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



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
    const [job, setJob] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [university, setUniversity] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [school, setSchool] = React.useState("");
    const [schoolYear, setSchoolYear] = React.useState("");
    const [motherName, setMotherName] = React.useState("");
    const [familyCode, setFamilyCode] = React.useState("");

    const [financialHelp, setFinancialHelp] = React.useState(false);
    const [materialHelp, setMaterialHelp] = React.useState(false);
    const [morningPeriod, setMorningPeriod] = React.useState(false);
    const [afternoonPeriod, setAfternoonPeriod] = React.useState(false);
    const [nightPeriod, setNightPeriod] = React.useState(false);
    const [allDayPeriod, setAllDayPeriod] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState(states);

    const [startDate, setStartDate] = React.useState(new Date());

    function finishRegistration(){
        navigation.navigate('LoggedScreen', {type: params.type})
        setName("")
        setCep("")
        setCpf("")
        setAge("")
        setCity("")
        setObservationField("")
        setJob("")
        setEmail("")
        setPassword("")
        setUniversity("")
        setSubject("")
        setSchool("")
        setSchoolYear("")
        setMotherName("")
        setFamilyCode("")
    }
    return (
        <>
            <ScrollView>
                <Header></Header>
                <SafeAreaView>
                    <View >
                        {/* COMUM A TODOS */}
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
                            {/* <Text >Data de Nascimento:</Text>
                            <TextInput
                            style={styles.textInput}
                            /> */}
                            <SafeAreaView style={styles.textInput}>
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
                        </SafeAreaView>
                        {(params.type === 0) && // DOADOR
                        
                        <View>  
                            <View>
                                <TextInput
                                style={styles.textInput}
                                onChangeText={setJob}
                                value={job}
                                label="Profissão"
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text >Categoria de Ajuda: </Text>
                                <Text>Financeira</Text>
                                <Checkbox
                                status={financialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setFinancialHelp(!financialHelp);
                                }}
                                />
                                <Text>Material</Text>
                                <Checkbox
                                status={materialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMaterialHelp(!materialHelp);
                                }}
                                />
                            </View>
                        </View>}

                        {(params.type===1) && // UNIVERSITÁRIO
                        
                        <View>    
                            <View>
                                <TextInput
                                style={styles.textInput}
                                onChangeText={setUniversity}
                                value={university}
                                label="Universidade"
                                />
                            </View>
                            <View>
                                <TextInput
                                style={styles.textInput}
                                onChangeText={setSubject}
                                value={subject}
                                label="Disciplina oferecida"
                                />
                            </View>
                            <View style={{flexDirection: "row",justifyContent:'space-between'}}>
                                <Text >Período:</Text>
                                <Text>Matutino</Text>
                                <Checkbox
                                status={morningPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMorningPeriod(!morningPeriod);
                                }}
                                />
                                <Text>Vespertino</Text>
                                <Checkbox
                                status={afternoonPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setAfternoonPeriod(!afternoonPeriod);
                                }}
                                />
                                <Text>Noturno</Text>
                                <Checkbox
                                status={nightPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setNightPeriod(!nightPeriod);
                                }}
                                />
                            </View>
                        </View>}

                        {(params.type===3) && // ALUNO
                        <View>
                            <View>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setSchool}
                            value={school}
                            label="Escola"
                            />
                            </View> 
                            <View>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setSchoolYear}
                            value={schoolYear}
                            label="Ano"
                            />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text >Categoria de Ajuda:</Text>
                                <Text>Financeira</Text>
                                <Checkbox
                                status={financialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setFinancialHelp(!financialHelp);
                                }}
                                />
                                <Text>Material</Text>
                                <Checkbox
                                status={materialHelp ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMaterialHelp(!materialHelp);
                                }}
                                />
                            </View>
                            <View style={{flexDirection: "row"}}>
                                <Text>Período:</Text>
                                <Text>Matutino</Text>
                                <Checkbox
                                status={morningPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMorningPeriod(!morningPeriod);
                                }}
                                />
                                <Text>afternoonPeriod</Text>
                                <Checkbox
                                status={afternoonPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setAfternoonPeriod(!afternoonPeriod);
                                }}
                                />
                                <Text>Integral</Text>
                                <Checkbox
                                status={allDayPeriod ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setAllDayPeriod(!allDayPeriod);
                                }}
                                />
                            </View> 
                            <View>
                            <Text >Nome da Mãe:</Text>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setMotherName}
                            value={motherName}
                            label="Nome da Mãe"
                            />
                            </View> 
                            <View>
                            <Text >Código familiar:</Text>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setFamilyCode}
                            value={familyCode}
                            label="Código familiar"
                            />
                            </View>
                        </View>
                        }

                        <View>
                            <Text >Email:</Text>
                            <TextInput
                            style={styles.textInput}
                            onChangeText={setEmail}
                            value={email}
                            label="Email"
                            />
                        </View>

                        <View>
                            <Text>Senha:</Text>
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
            
                <Text style={styles.header}> 
                    Referências
                </Text>
            </ScrollView>




        </>

  );
}

export default RegisterUser;
