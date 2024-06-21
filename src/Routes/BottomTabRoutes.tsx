import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Home } from "../Pages/Home";
import Icon from "@react-native-vector-icons/ionicons";
import { Image, Text } from "react-native";
// import iconehome from "../../Assets/iconeHome.png";
// import {styles} from './style'

const TabAll = createBottomTabNavigator();

export function BottomTabRoutes () {


    return (
        <TabAll.Navigator
        
        screenOptions={{
            title:"", tabBarLabel:"",
            tabBarStyle:{
          backgroundColor:'#fff',
          height:60
      }, headerStyle:{
          backgroundColor: '#fff',
    
      },
      }}>
          <TabAll.Screen name='a' component={Home} 
          options={{
            tabBarIcon: ({  focused }) => (
            <>
             {/* <Image source={iconehome} style={styles.imagetab} /> */}
              <Text  style={{fontSize:10, color: focused ?'#fff' : '#fff'}}> Home</Text>
            </>
            ),
          }}/>
        </TabAll.Navigator>
      )
}