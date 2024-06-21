import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { styles } from "./style";
import iconehome from "../../Assets/iconeHome.png";
import { TextInputComponent } from "../../Components/TextInput";
import { ButtonComponents } from "../../Components/ButtonComponents";

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const navegando = useNavigation();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navegando = useNavigation();
.
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
            <Image source={iconehome} style={styles.image} />
          </View>
          <View>
            <Text style={styles.bemvindo}>Bem-vindo!</Text>
          </View>
          <View>
            <Text style={styles.autentic}>Autenticação</Text>
          </View>

          <TextInputComponent
            recebeplaceholder="Digite seu email"
            recebefuncao={handleEmail}
            recebetipoinput={false}
            recebevalue={email}
          />

          <TextInputComponent
            recebeplaceholder="Digite sua senha"
            recebefuncao={handlePassword}
            recebetipoinput={false}
            recebevalue={password}
          />

          <ButtonComponents title="Entrar" recebefuncao={handleLogin} />
        </View>
      </>
    </TouchableWithoutFeedback>
  );
};
