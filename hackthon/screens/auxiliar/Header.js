import { Text } from "react-native";
const styles = {
    header : {
        color: '#F8CF2C',
        alignItems: 'center',justifyContent: 'center',backgroundColor: '#252827',display:'flex',
        height: '60px',
        fontWeight: 600
    },
    tituloh1 : {
        fontSize: 30
    },
}
export default function Header(){

    return(

        <Text style={styles.header}> 
            <Text style={styles.tituloh1}>EducaDrinhos</Text>
        </Text>
            )
}