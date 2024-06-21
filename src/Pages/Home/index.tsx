import { View, Text, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { Card } from '../../Components/Card'
import { styles } from './style'


export function Home() {
  return (
    <View style={styles.home_container}>
      <Text style={styles.home_titulo}>Pokédex</Text>
      <Text style={styles.home_descricao}>Pesquise um pokémon específico utilizando o seu nome.</Text>
      <ScrollView>
        <Card/>
      </ScrollView>
    </View>
  )
}