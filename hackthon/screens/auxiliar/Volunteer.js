import { View,Text,Button } from 'react-native';  
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

export function VolunteerRegister(props){

    const [university, setUniversity] = React.useState("");
    const [subject, setSubject] = React.useState("");
    const [morningPeriod, setMorningPeriod] = React.useState(false);
    const [afternoonPeriod, setAfternoonPeriod] = React.useState(false);
    const [nightPeriod, setNightPeriod] = React.useState(false);

    return(

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
        </View>
    )
}


// export function LoggedScreenVolunteer(props){


//     return(


//     )

// }