import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../Pages/Login";
import { ButtonTabRoutes } from "./ButtonTabRoutes";

export type ParametrosDaRota ={
    StackLogin: {name: string};
    StackTabsPages : {name: string};
}

const StackNavegacao = createNativeStackNavigator<ParametrosDaRota>();

export function StactRoutes(){

    return(
        <NavigationContainer>
            <StackNavegacao.Navigator screenOptions={{headerShown: false}}>
                <StackNavegacao.Screen name='StackLogin' component={Login}/>
                {/* <StackNavegacao.Screen name='StackTabsPages' component={ButtonTabRoutes}/> */}

            </StackNavegacao.Navigator>
        </NavigationContainer>
    )
}