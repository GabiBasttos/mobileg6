import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./style";
import fundoCard from "../../Assets/fundoCard.png";
import bulbasaur from "../../Assets/Pokémon/bulbasaur.png"

export function Card() {
  return (
    <View style={styles.card_container}>
      <Image
        source={fundoCard}
        style={styles.card_fundo}
      />
      <View style={styles.card_nome}>
        <Text style={styles.card_nome_numero}>#001</Text>
        <Text style={styles.card_nome_pokemon}>Bulbasaur</Text>
      </View>
      <Image source={bulbasaur} style={styles.card_imagem}/>
    </View>
  );
}
