import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./style";
import iconeLogin from "../../Assets/iconeLogin.png";
import { TextInputComponent } from "../../Components/TextInput";
import { ButtonComponents } from "../../Components/ButtonComponents";

export const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navegando = useNavigation();

    const handleEmail = (value: string) => {
        setEmail(value);
      };
    
      const handlePassword = (value: string) => {
        setPassword(value);
      };


  const handleLogin = () => {
    if (email) {
      navegando.navigate("StackTabsPages", { name: "Login" });
    } else {
      Alert.alert("Credenciais invalidas!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={iconeLogin} style={styles.image} />
          </View>
          <View>
            <Text style={styles.bemvindo}>Bem-vindo!</Text>
          </View>
          <View>
            <Text style={styles.autentic}>Autenticação</Text>
          </View>

          <TextInputComponent
            recebeplaceholder="Digite seu nome"
            // value={inputValue}
            // onChangeText={(value) => setInputValue (value)} 
            recebefuncao={handleNome}
            recebetipoinput={false}
            recebevalue={nome}
          />

          <TextInputComponent
            recebeplaceholder="Digite sua senha"
            recebefuncao={handlePassword}
            recebetipoinput={true}
            recebevalue={password}
          />

          { <ButtonComponents title="Entrar" /*onPress={handleAsyncStorage}*/ recebefuncao={handleLogin} /> }
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};
