import { Button , View } from 'react-native';  


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

function LoggedScreenDonator(props){

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

export default LoggedScreenDonator