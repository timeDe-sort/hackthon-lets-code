import React from 'react';

import { Button , View , ScrollView, Text, SafeAreaView } from 'react-native';  
import Header from './auxiliar/Header';
import { TextInput } from 'react-native-paper';


const styles = {
  header : {alignItems: 'center', justifyContent: 'center', backgroundColor: 'aquamarine', display:'flex' },
  titleH1 : {fontSize: 30},
  titleH2 : {fontSize: 20},
  boxForms : { justifyContent: 'space-around', height: "80%", width: "80%",marginLeft:"10%"},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    height: 50, 
    marginBottom: "1rem" ,
    marginTop: "1rem"
}    
}

function Login(props) {
  const {navigation,route} = props;
  const params = route.params
  const type = params.type

  const [login,   setLogin] = React.useState("");
  const [password,   setPassword] = React.useState("");
    
  return (
    <>
      <Header ></Header>
      <View style={styles.boxForms}>

        
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={setLogin}
              value={login}
              label="Login"
            />
            <TextInput
              style={styles.textInput}
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
              textContentType="password"
              label="Senha"
            />
            </View>

        </View>
        <Button title="Entrar"onPress={() => navigation.navigate('LoggedScreen',{type: type})} />
        {/* <Text style={styles.header}>
        Referências
        </Text> */}
    </>
  );
}

export default Login;
