import { Button , View, Text } from 'react-native';  
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
        
    }
}

export function LoggedScreenDonator(props){

    return(

        <View style={styles.boxButtons}>
            <View style={styles.buttons}>
                <Button   title= "Perfil" onPress={() => navigation.navigate('Profile')} />
            </View>
            <View style={styles.buttons}>
                <Button   title= "Acompanhamento" onPress={() => navigation.navigate('Accompaniment')} />
            </View>
            <View style={styles.buttons}>
                <Button   title= "Sobre nós" onPress={() => navigation.navigate('LoginOuRegis')} />
            </View>
        </View>
    )
}


export function DonatorRegister(){


    const [job, setJob] = React.useState("");
    const [financialHelp, setFinancialHelp] = React.useState(false);
    const [materialHelp, setMaterialHelp] = React.useState(false);

    return (

            <View>  
                <View>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={setJob}
                    value={job}
                    label="Profissão"
                    />
                </View>
                <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
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
            </View>
)
}
