import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type PropsContexto = {
  nome: string;
  setNome: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  email: string; // Incluindo a propriedade 'email'
  setEmail: (value: string) => void; // Função para definir 'email'
  loginAutentication: (nome: string, password: string) => void;
};

const ContextoAll = createContext<PropsContexto>({
  nome: "",
  setNome: () => {},
  password: "",
  setPassword: () => {},
  email: "", // Inicializando 'email' como string vazia
  setEmail: () => {}, // Função vazia para setEmail inicialmente
  loginAutentication: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [nome, setNome] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>(""); // Estado para 'email'
  const navegando = useNavigation();

  const loginAutentication = (nome: string, password: string) => {
    if (nome === "" || password === "") {
      Alert.alert("Credenciais inválidas");
    } else {
      navegando.navigate("StackTabsPages", { name: "Login" });
    }
  };

  async function storedData() {
    // Armazenar valor no async storage
    await AsyncStorage.setItem("@App1", nome);
  }

  async function getData() {
    const response = await AsyncStorage.getItem("@App1");
    if (response) {
      setNome(response);
    }
  }

  return (
    <ContextoAll.Provider
      value={{ nome, setNome, password, setPassword, email, setEmail, loginAutentication }}
    >
      {children}
    </ContextoAll.Provider>
  );
};

export const useAuth = () => useContext(ContextoAll);
