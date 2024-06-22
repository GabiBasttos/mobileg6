import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../Pages/Home";
import { Image, Text } from "react-native";
import iconehome from "../Assets/iconeHome.png";
import {Perfil} from '../Pages/Perfil'
import Person from '../Assets/iconePerfil.png'
import { Login } from "../Pages/Login";
import Sair from '../Assets/iconeSair.png'

const TabAll = createBottomTabNavigator();

export function BottomTabRoutes() {


    return (
        <TabAll.Navigator

            screenOptions={{
                headerShown: false,
                title: "", tabBarLabel: "",
                tabBarStyle: {
                    backgroundColor: '#fff',
                    height: 60
                },
            }}>
            <TabAll.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Image source={iconehome} style={{tintColor: focused ? '#EA5D60' : '#000' }} />
                            <Text style={{ fontSize: 10, color: focused ? '#EA5D60' : '#000', fontWeight: 'bold'}}> Home</Text>
                        </>
                    ),
                }} />

            <TabAll.Screen name='Sobre' component={Perfil}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                        <Image source={Person} style={{tintColor: focused ? '#EA5D60' : '#000' }} />
                            {/* <Icon style={ styles.icone}name="person"  color={focused ? '#EA5D60' : '#000'} size={20}/> */}
                            <Text style={{ fontSize: 10, color: focused ? '#EA5D60' : '#000' }}>Perfil</Text>
                        </>
                    ),
                }} />
                 <TabAll.Screen name='Sair' component={Login}
                 // mudar o component dessa opcao de sair
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                        <Image source={Sair} style={{tintColor: focused ? '#EA5D60' : '#000' }} />
                            <Text style={{ fontSize: 10, color: focused ? '#EA5D60' : '#000' }}>Sair</Text>
                        </>
                    ),
                }} />
        </TabAll.Navigator>
    )
}