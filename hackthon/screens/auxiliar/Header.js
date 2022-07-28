import { Text } from "react-native";
const styles = {
    header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
    tituloh1 : {fontSize: 30},
}
export default function Header(){

    return(

        <Text style={styles.header}> 
            <Text style={styles.tituloh1}>Nome do Aplicativo</Text>
        </Text>
            )
}