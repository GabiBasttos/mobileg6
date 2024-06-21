import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Card } from "../../Components/Card";
import { styles } from "./style";
import { TextInputComponent } from "../../Components/TextInput";

export function Home() {
  const [search, setSearch] = useState("");
  const allPokemons = [
    { name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
    { name: "Ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
    { name: "Venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    { name: "Charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
    // Adicione mais Pokémons conforme necessário
  ];

  const filteredPokemons = allPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.home_container}>
      <Text style={styles.home_titulo}>Pokédex</Text>
      <Text style={styles.home_descricao}>
        <Text>Pesquise um pokémon específico utilizando o seu nome.</Text>
      </Text>
      <TextInputComponent
        recebeplaceholder="Pesquisar Pokémon"
        recebevalue={search}
        recebetipoinput={false}
        recebefuncao={setSearch} // Pass setSearch here
      />
      <ScrollView>
        {filteredPokemons.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
        ))}
      </ScrollView>
    </View>
  );
}
