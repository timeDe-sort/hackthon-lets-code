import { View, Text , Button} from 'react-native';  
import React from 'react';
import { TextInput,Checkbox } from 'react-native-paper';

const styles = {
    boxButtons : {
        display: 'flex',
        justifyContent: 'center',
        width : "60%",
        marginLeft : "20%",
        marginTop : "1.5rem",
    },    
    buttons : {
        margin: "10%",
        height: "30"
        
    },
    textInput: {

        height: 50, 
        marginBottom: "1rem" 

    }  
}

export function StudentRegister(props){

    const [school, setSchool] = React.useState("");
    const [schoolYear, setSchoolYear] = React.useState("");
    const [motherName, setMotherName] = React.useState("");
    const [familyCode, setFamilyCode] = React.useState("");
    const [financialHelp, setFinancialHelp] = React.useState(false);
    const [materialHelp, setMaterialHelp] = React.useState(false);
    const [morningPeriod, setMorningPeriod] = React.useState(false);
    const [afternoonPeriod, setAfternoonPeriod] = React.useState(false);
    const [allDayPeriod, setAllDayPeriod] = React.useState(false);

    return(

        <View>
            <View>
                <TextInput
                style={styles.textInput}
                onChangeText={setSchool}
                value={school}
                label="Escola"
                />
            </View> 

            <View style={{flexDirection: "row", justifyContent:'space-between'}}>
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
            <View>
                <TextInput
                style={styles.textInput}
                onChangeText={setSchoolYear}
                value={schoolYear}
                label="Ano"
                />
            </View>
            <View style={{flexDirection: "row",justifyContent:'space-between',alignItems:'center'}}>
                <View>
                    <Text>Período:</Text>
                </View> 
                <View  style={{flexDirection: "row"}}>
                    <Text>Matutino</Text>
                    <Checkbox
                    status={morningPeriod ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setMorningPeriod(!morningPeriod);
                    }}
                    />
                </View> 
                <View style={{flexDirection: "row"}}>
                    <Text>Vespertino</Text>
                    <Checkbox
                    status={afternoonPeriod ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setAfternoonPeriod(!afternoonPeriod);
                    }}
                    />
                </View> 
                <View style={{flexDirection: "row"}}>
                    <Text>Integral</Text>
                    <Checkbox
                    status={allDayPeriod ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setAllDayPeriod(!allDayPeriod);
                    }}
                    />
                </View> 
            </View> 
            <View>
                <TextInput
                style={styles.textInput}
                onChangeText={setMotherName}
                value={motherName}
                label="Nome da Mãe"
                />
            </View> 
            <View>
                <TextInput
                style={styles.textInput}
                onChangeText={setFamilyCode}
                value={familyCode}
                label="Código familiar"
                />
            </View>
        </View>
    )
}

export function LoggedScreenStudent(props){


    return(
        <View style={styles.boxButtons}>
            <View style={styles.buttons}>
                <Button   title= "Perfil" onPress={() => navigation.navigate('Profile')} />
            </View>
            <View style={styles.buttons}>
                <Button   title= "Aulas" onPress={() => navigation.navigate('Classes')} />
            </View>
            <View style={styles.buttons}>
            <Button  title= "Sobre nós" onPress={() => navigation.navigate('LoginOuRegis')} />
            </View>
        </View> 


    )
}