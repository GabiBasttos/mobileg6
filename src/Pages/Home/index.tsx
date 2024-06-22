import { View, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "../../Components/Card";
import { styles } from "./style";
import { TextInputComponent } from "../../Components/TextInput";

interface Pokemon {
  name: string;
  url: string;
}

export function Home() {
  const [search, setSearch] = useState("");
  const [allPokemons, setAllPokemons] = useState<Pokemon[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setAllPokemons(response.data.results);
        setFilteredPokemons(response.data.results);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      }
    };

    fetchPokemons();
  }, []);

  useEffect(() => {
    const filtered = allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPokemons(filtered);
  }, [search, allPokemons]);

  return (
    <View style={styles.home_container}>
      <Text style={styles.home_titulo}>Pokédex</Text>
      <Text style={styles.home_descricao}>
        Pesquise um pokémon específico utilizando o seu nome.
      </Text>
      <TextInputComponent
        recebeplaceholder="Pesquisar Pokémon"
        recebevalue={search}
        recebefuncao={setSearch}
        recebetipoinput={false}
      />
      <ScrollView>
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </ScrollView>
    </View>
  );
}
