import { View,Button } from 'react-native';  


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



export function LoggedScreenServiceCenter(props){


    return(

        <View style={styles.boxButtons}>
            <View style={styles.buttons}>
                <Button   title= "Alunos" onPress={() => navigation.navigate('Students')} />
            </View>
            <View style={styles.buttons}>
                <Button   title= "Professores e Aulas" onPress={() => navigation.navigate('TeacherAndClasses')} />
            </View>
            <View style={styles.buttons}>
                <Button   title= "Doadores" onPress={() => navigation.navigate('Donators')} />
            </View>
                <View style={styles.buttons}>
            <Button  title= "Sobre nós" onPress={() => navigation.navigate('LoginOuRegis')} />
            </View>
         </View> 
    )

}