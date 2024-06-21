import React from "react";
import {styles} from './style'
import { Text, TouchableOpacity } from "react-native";

type PropsButton = {
    title: string;
    recebefuncao: () => void;
}

export function ButtonComponents({title, recebefuncao}: PropsButton){

    return(

        <>
        <TouchableOpacity onPress={recebefuncao}>
            <Text style={styles.textButton}>
                {title}
            </Text>
        </TouchableOpacity>
        
        </>
    )
}