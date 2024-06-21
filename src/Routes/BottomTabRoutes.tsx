import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../Pages/Home";
import Icon from "@react-native-vector-icons/ionicons";
import { Text } from "react-native";

const TabAll = createBottomTabNavigator();

export function BottomTabRoutes () {


    return (
        <TabAll.Navigator
        
        screenOptions={{
            title:"", tabBarLabel:"",
            tabBarStyle:{
          backgroundColor:'#000',
          height:60
      }, headerStyle:{
          backgroundColor: '#000',
    
      },
      }}>
          <TabAll.Screen name='a' component={Home} 
          options={{
            tabBarIcon: ({  focused }) => (
            <>
              <Icon name="home" color={focused ? '#000' : '#000'} size={20} />
              <Text  style={{fontSize:10, color: focused ?'#fff' : '#fff'}}> Home</Text>
            </>
            ),
          }}/>
        </TabAll.Navigator>
      )
}