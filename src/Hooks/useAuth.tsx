import { useNavigation } from "@react-navigation/native";
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export type PropsContexto = {
    email: string;
    setEmail: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
    loginAutentication: (email: string, password: string) => void;
}

const ContextoAll = createContext<PropsContexto>({
    email: '',
    setEmail: () => { },
    password: '',
    setPassword: () => { },
    loginAutentication: () => { },
})

export const AuthProvider = ({ children }: any) => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navegando = useNavigation();

    const loginAutentication = (email: string, password: string) => {
        if(email === "" || password === ""){
            Alert.alert("Credenciais inválidas")
        } else{
            navegando.navigate("StackTabsPages", {name: "Login"})
        }
       
    }

    return (

        <ContextoAll.Provider value={{ email, setEmail, password, setPassword, loginAutentication }}>
            {children}
        </ContextoAll.Provider>


    )

}

export const useAuth = () => useContext(ContextoAll)
