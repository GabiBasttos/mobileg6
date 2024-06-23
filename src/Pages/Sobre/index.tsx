import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import axios from "axios";
import { styles } from "./style";

type RouteParams = {
  SobrePokemon: {
    pokemonUrl: string;
  };
};

export function SobrePokemon() {
  const route = useRoute<RouteProp<RouteParams, "SobrePokemon">>();
  const { pokemonUrl } = route.params;

  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(pokemonUrl);
        setPokemonData(response.data);
      } catch (error) {
        console.error("Erro ao buscar informações do Pokémon:", error);
      }
    };

    fetchPokemonData();
  }, [pokemonUrl]);

  if (!pokemonData) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.container_top}>
        <TouchableOpacity>
          <Image
            source={require("../../Assets/setaVoltar.png")}
            alt="seta de voltar"
            style={styles.seta}
          />
        </TouchableOpacity>

        <Image
          source={{ uri: pokemonData.sprites.front_default }}
          alt={`Imagem de ${pokemonData.name}`}
          style={styles.pokemon}
        />

        <Text style={styles.name}>
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </Text>
        <Text style={styles.number}>
          #{pokemonData.id.toString().padStart(3, "0")}
        </Text>
        <Text style={styles.about}>Sobre o Pokémon</Text>
      </View>

      <View style={styles.container_bottom}>
        <Text>Descrição</Text>
        <Text>{pokemonData.description}</Text>
        <Text>Evoluções</Text>
      </View>
    </View>
  );
}
