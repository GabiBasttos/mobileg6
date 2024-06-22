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
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {
    const [nome, setNome] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navegando = useNavigation();
    // const [inputValue, setInputValue] = useState('')
    // const [value, setValue]= useState('') 

    // async function handleAsyncStorage(){
    //   //armazenar valor no asyncstorage
    //   await AsyncStorage.setItem("@App1", inputValue)
    //   getData()
    // }

    // async function getData(){
    //   const response = await AsyncStorage.getItem("@App1")
    //   if(response){
    //     setValue(response)
    //   }
    // }
    // useEffect(() =>{
    //   getData()
    // },[])

    const handleNome = (value: string) => {
        setNome(value);
      };
    
      const handlePassword = (value: string) => {
        setPassword(value);
      };


  const handleLogin = () => {
    if (nome) {
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
