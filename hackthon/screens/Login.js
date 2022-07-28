import React from 'react';

import { Button , View , ScrollView, Text, SafeAreaView,TextInput } from 'react-native';  
import Header from './auxiliar/Header';
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
}

function Login(props) {
  const {navigation} = props;

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
              style={styles.input}
              onChangeText={setLogin}
              value={login}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="placeholder"
              secureTextEntry={true}
              textContentType="password"
            />
          </SafeAreaView>
        </View>

        <Button title="Entrar"onPress={() => navigation.navigate('HomeScreen')} />

        <Text style={styles.header}>
        Referências
        </Text>
      </ScrollView>
    </>
  );
}

export default Login;
