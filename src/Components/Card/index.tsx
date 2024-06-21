import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./style";
import fundoCard from "../../Assets/fundoCard.png";
import axios from "axios";

interface CardProps {
  name: string;
  url: string;
}

export function Card({ name, url }: CardProps) {
  const [pokemonImage, setPokemonImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonImage = async () => {
      try {
        const response = await axios.get(url);
        setPokemonImage(response.data.sprites.front_default);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonImage();
  }, [url]);

  return (
    <View style={styles.card_container}>
      <Image source={fundoCard} style={styles.card_fundo} />
      <View style={styles.card_nome}>
        <Text style={styles.card_nome_numero}>#001</Text> {/* Ajuste conforme necessário */}
        <Text style={styles.card_nome_pokemon}>{name.charAt(0).toUpperCase() + name.slice(1)}</Text>
      </View>
      {pokemonImage && <Image source={{ uri: pokemonImage }} style={styles.card_imagem} />}
    </View>
  );
}
