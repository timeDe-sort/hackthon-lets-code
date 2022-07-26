import React from 'react';
import { Button , View , ScrollView, Text, SafeAreaView,TextInput} from 'react-native';  

const styles = {
  header : {alignItems: 'center',justifyContent: 'center',backgroundColor: 'aquamarine',display:'flex' },
  tituloh1 : {fontSize: 30},
  tituloh2 : {fontSize: 20},
  BoxForms : {display: 'flex', alignItems: 'center', justifyContent: 'center', border: "1px solid black"},
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

}
function Login(props) {
  const {navigation} = props;

  const [Login,   setLogin] = React.useState("");
  const [Senha,   setSenha] = React.useState("");
  
  const loginChange = e => {
    setLogin(e.target.value);
  };
  const senhaChange = e => {
    setSenha(e.target.value);
  };
  const Change = () => {
    console.log('OK');
  };
  return (
    <>
    
      <ScrollView>
        <Text className="Header" style={styles.header}> 
          <Text style={styles.tituloh1}>Nome do Aplicativo</Text>
        </Text>

        <View style={styles.BoxForms}>
          <Text style={styles.tituloh2} className="Login">Login</Text>

          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={setLogin}
              value={Login}
            />
            <TextInput
              style={styles.input}
              onChangeText={setSenha}
              value={Senha}
              placeholder="useless placeholder"
              secureTextEntry={true}
              textContentType="password"
            />
          </SafeAreaView>

  
        </View>


        <Button title="Entrar"onPress={() => navigation.navigate('TelaInicial')} />

    
        <Text style={styles.header}>
        Referências
        </Text>
      </ScrollView>
    </>
  );
}

export default Login;
