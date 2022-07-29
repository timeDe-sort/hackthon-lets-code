import React from 'react';

import { View,ScrollView } from 'react-native';  
import Header from './auxiliar/Header';
import { TextInput, Button } from 'react-native-paper';
import { styles } from './auxiliar/Styles';


function Login(props) {
  const {navigation,route} = props;
  const params = route.params
  const type = params.type

  const [login,   setLogin] = React.useState("");
  const [password,   setPassword] = React.useState("");
    
  return (
    <>
     <ScrollView style={styles.backGround}>
        <Header ></Header>
        <View style={styles.boxForms}>
            <View>
              <TextInput
                style={styles.textInputLogin}
                onChangeText={setLogin}
                value={login}
                label="Login"
                />
              <TextInput
                style={styles.textInputLogin}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                textContentType="password"
                label="Senha"
                />
              </View>
          <View style={styles.boxButtons}>
            <View style={styles.buttons}>
            <Button color={'#272343'} onPress={() => navigation.navigate('LoggedScreen',{type: type})}>
              Entrar
            </Button>
            </View>
          </View>

        </View>
      </ScrollView>
    </>
  );
}

export default Login;
