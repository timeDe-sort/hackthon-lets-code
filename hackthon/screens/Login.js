import React from 'react';

import { Button , View , ScrollView, Text, SafeAreaView } from 'react-native';  
import Header from './auxiliar/Header';
import { TextInput } from 'react-native-paper';


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
  textInput: {
    height: 50, 
    marginBottom: "1rem" 

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
      <ScrollView>
        <Header></Header>

        <View style={styles.boxForms}>
          <Text style={styles.titleH2} className="Login">Login</Text>

          <SafeAreaView>
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
              placeholder="placeholder"
              secureTextEntry={true}
              textContentType="password"
              label="Senha"
            />
          </SafeAreaView>
        </View>

        <Button title="Entrar"onPress={() => navigation.navigate('LoggedScreen',{type: type})} />

        <Text style={styles.header}>
        Referências
        </Text>
      </ScrollView>
    </>
  );
}

export default Login;
