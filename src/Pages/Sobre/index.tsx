import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { style } from "./style";

export function SobrePokemon() {
  return (
    <View>
      <View style={style.container_top}>
        <TouchableOpacity>
          <Image
            source={require("../../Assets/setaVoltar.png")}
            alt="seta de voltar"
            style={style.seta}
          />
        </TouchableOpacity>

        <Image
          source={require("../../Assets/Pokémon/bulbasaur.png")}
          alt="foto do bulbasaur"
          style={style.pokemon}
        />

        <Text>Bulbasaur</Text>
        <Text>#001</Text>
        <Text>Sobre o Pokemon</Text>
      </View>

      <View style={style.container_bottom}>
        <Text>Descrição</Text>
        <Text>
          Bulbasaur can be seen napping in bright sunlight. There is a seed on
          its back. By soaking up the sun's rays, the seed grows progressively
          larger.
        </Text>
        <Text>Evoluções</Text>
        <Image
          source={require("../../Assets/Pokémon/bulbasaur.png")}
          alt="foto do bulbasaur"
          style={style.pokemon}
        />
        <Image
          source={require("../../Assets/Pokémon/ivysaur.png")}
          alt="foto do ivysaur"
          style={style.pokemon}
        />
        <Image
          source={require("../../Assets/Pokémon/venusaur.png")}
          alt="foto do venusaur"
          style={style.pokemon}
        />
      </View>
    </View>
  );
}
