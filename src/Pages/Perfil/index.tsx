// Pages/Perfil/index.tsx

import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useAuth, PropsContexto } from '../../Hooks/useAuth';
import { styles } from './style';
import iconeHome from '../../Assets/iconeHome.png';

const options = [
  {
    title: 'Pokedex',
    icon: iconeHome,
    link: 'https://www.pokemon.com/br/pokedex',
  },
  {
    title: 'Assistir Pokémon',
    icon: iconeHome,
    link: 'https://www.pokemon.com/br/dibujos-animados',
  },
  {
    title: 'Jogar Pokémon GO',
    icon: iconeHome,
    link: 'https://pokemongolive.com/?hl=pt_BR',
  },
];

export function Perfil() {
  const { nome } = useAuth() as PropsContexto; // Acesso ao nome através do contexto

  const handleOptionPress = (link: string) => {
    Linking.openURL(link).catch((err) =>
      console.error('Erro ao abrir o link:', err)
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backText}>&lt;</Text>
      </TouchableOpacity>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://pa1.aminoapps.com/6717/929240dcbfc57a52f8c701bf904ce2d358070397_hq.gif' }}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Olá, {nome}!</Text>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.optionItem}
            onPress={() => handleOptionPress(option.link)}
          >
            <Image source={option.icon} style={styles.optionIcon} />
            <Text style={styles.optionText}>{option.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
