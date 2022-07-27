import React from 'react';
import { Checkbox } from 'react-native-paper';
import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  
import DropDownPicker from 'react-native-dropdown-picker';


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
}



const Estados = [

    {label : "Acre" , value : "AC"},
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

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState(Estados);
    const [Financeira, setFinanceira] = React.useState(false);
    const [Material, setMaterial] = React.useState(false);

    function Finalizar(){
        navigation.navigate('TelaInicial')
        setNome("")
        setCEP("")
        setCPF("")
        setIdade("")
        setCidade("")
        setObservacao("")
        setProfissao("")
        setEmail("")
        setSenha("")
        setUniversidade("")
        setDisciplina("")
        setEscola("")
        setSerie("")
        setMae("")
        setCodigo("")

    }
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

                        <Text >UF:</Text>
                        <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        searchable={true}
                        searchTextInputProps={{
                            maxLength: 25
                        }}
                        containerStyle={{
                            width: "20%",
                        }}
                        />

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
                            <View style={{flexDirection: "row"}}>
                                <Text >Categoria de Ajuda: </Text>
                                <Text>   Financeira</Text>
                                <Checkbox
                                status={Financeira ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setFinanceira(!Financeira);
                                }}
                                />
                                <Text>Material</Text>
                                <Checkbox
                                status={Material ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMaterial(!Material);
                                }}
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
                <Button title="Finalizar" onPress={Finalizar} />
                </View>
            
                <Text style={styles.header}> 
                    Referências
                </Text>
            </ScrollView>


        </>

  );
}

export default Registrar;



