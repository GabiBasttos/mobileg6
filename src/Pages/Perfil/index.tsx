import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "../../Hooks/useAuth";


export function Perfil() {
  const {nome} = useAuth ()
  return (
    <View>
      <Text>Olá, {nome}</Text>
    </View>
  );
};
