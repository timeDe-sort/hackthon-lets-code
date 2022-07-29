import { Button , View , ScrollView, Text, SafeAreaView,TextInput, Pressable} from 'react-native';  
import { Avatar } from 'react-native-paper';
import Header from './auxiliar/Header';
import { LoggedScreenDonator } from './auxiliar/Donator';
import { LoggedScreenVolunteer } from './auxiliar/Volunteer';
import { LoggedScreenStudent } from './auxiliar/Student';
import { LoggedScreenServiceCenter } from './auxiliar/ServiceCenter';

const styles = {
    header : {alignItems: 'center', justifyContent: 'center', backgroundColor: 'aquamarine', display:'flex' },
    titleH1 : {fontSize: 30},
    titleH2 : {fontSize: 20},
    boxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: "1px solid black"},
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
        marginTop : "1.5rem",
    },    
    buttons : {
        margin: "10%",
        height: "30"
        
    }
}


function LoggedScreen(props) {
    
    const { route,navigation } = props
    const params = route.params
    const type = params.type
    console.log(type)
    
    return (
        <>
            <ScrollView>
                {
                    <Header></Header>
                }
                <View style={{flexDirection:"row" , justifyContent: 'space-between', width: '80%', alignItems: 'center',marginLeft:"10%", marginTop:"1rem"}}>
                    <View style={{flexDirection:"column"}}>

                    <Text>NOME:</Text>
                    {(type ===3) &&
                    <Text>Centro: </Text>}
                    </View>
                    <Avatar.Image size={80}  />
                </View>


                { (type === 1) && 
                    <LoggedScreenVolunteer>

                    </LoggedScreenVolunteer>
                }

                { (type === 0) &&
                    <LoggedScreenDonator>

                    </LoggedScreenDonator>

                }

                {(type ===3) && 
                    <LoggedScreenStudent>

                    </LoggedScreenStudent>
                }

                {(type ===2) &&
                    <LoggedScreenServiceCenter>

                    </LoggedScreenServiceCenter>
                }
            {
                // TAMBÉM IRÁ VIRAR UM COMPONENTE
                <Text> 
                    <Text>Referências</Text>
                </Text>
            }

            </ScrollView>
        </>

    );

}

export default LoggedScreen;