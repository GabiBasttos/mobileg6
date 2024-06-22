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
import { useAuth } from "../../Hooks/useAuth";

export const Login = () => {

  const { email, setEmail, setPassword, password, loginAutentication} = useAuth();

  const handleEmail = (value: string) => setEmail(value);


  const handlePassword = (value: string) => setPassword(value);



  const handleLogin = () => {
    loginAutentication(email, password)
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
            recebeplaceholder="Digite seu email"
            // value={inputValue}
            // onChangeText={(value) => setInputValue (value)} 
            recebefuncao={handleEmail}
            recebetipoinput={false}
            recebevalue={email}
          />

          <TextInputComponent
            recebeplaceholder="Digite sua senha"
            recebefuncao={handlePassword}
            recebetipoinput={true}
            recebevalue={password}
          />

          {<ButtonComponents title="Entrar" /*onPress={handleAsyncStorage}*/ recebefuncao={handleLogin} />}
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};
