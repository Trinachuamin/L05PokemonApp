import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Image, StatusBar } from 'react-native';

const pokemonData = [
  {
    title: '🔮 PSYCHIC',
    color: '#FFC0CB',
    data: [
      { name: 'Mew', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png' },
      { name: 'Alakazam', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_65-2x.png' },
    ],
  },
  {
    title: '💧 WATER',
    color: '#87CEEB',
    data: [
      { name: 'Vaporeon', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_134-2x.png' },
      { name: 'Lapras', cardImage: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_131-2x.png' },
    ],
  },
];

const renderPokemon = ({ item }) => (
    <TouchableOpacity style={styles.cardItem}>
      <View>
        <Text style={styles.pokemonName}>{item.name}</Text>
      </View>
      <Image source={{ uri: item.cardImage }} style={styles.cardImage} />
    </TouchableOpacity>
);

const App = () => {
  return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.headerContainer}>
          <TouchableOpacity
              style={styles.addButton}>
            <Text style={styles.addButtonText}>ADD POKEMON</Text>
          </TouchableOpacity>
        </View>
        <SectionList
            sections={pokemonData}
            keyExtractor={(item, index) => item.name + index}
            renderItem={renderPokemon}
            renderSectionHeader={({ section }) => (
                <View style={[styles.sectionHeader, { backgroundColor: section.color }]}>
                  <Text style={styles.sectionHeaderText}>{section.title}</Text>
                </View>
            )}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: '#F3E5F5',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#4B0082',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionHeader: {
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  sectionHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft:40,
  },
  cardImage: {
    width: 220,
    height: 280,
    resizeMode: 'contain',
  },
});

export default App;
