import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';

type Characters = {
  id: string;
  director: string;
  description: string;
  cost: string;
  stock: string;
  imageUrl: string;
};

const characters: Characters[] = [
  { id: '1', director: 'Director', description: 'Character: Rose McGowan', cost: 'Cost 1', stock: 'Stock 1', imageUrl: 'https://i.pinimg.com/736x/5e/b3/57/5eb357d0b2611752842f455d3e98d48f.jpg' },
  { id: '2', director: 'Director', description: 'Character: Drew Barrymore', cost: 'Cost 2', stock: 'Stock 2', imageUrl: 'https://i.pinimg.com/736x/63/b1/ab/63b1ab2929501d8abf34983b0aa0fb42.jpg' },
  { id: '3', director: 'Director', description: 'Character: Skeet Ulrich', cost: 'Cost 3', stock: 'Stock 3', imageUrl: 'https://i.pinimg.com/736x/37/cc/00/37cc00004382e6fcaa0044425bd9aa95.jpg' },
  { id: '4', director: 'Director', description: 'Character: Matthew Lillard', cost: 'Cost 1', stock: 'Stock 1', imageUrl: 'https://i.pinimg.com/originals/88/87/bd/8887bdb1b94d146ffb2ff33947f8ee07.jpg' },
  { id: '5', director: 'Director', description: 'Character: Sarah Michelle Gellar', cost: 'Cost 2', stock: 'Stock 2', imageUrl: 'https://i.pinimg.com/736x/d9/ae/2b/d9ae2b4d5b6752195e68da19e270540a.jpg' },
];

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const DashboardCharacter: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const renderItem: ListRenderItem<Characters> = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Scenes')}>
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        <View>
          <Text style={styles.cardTitle}>{item.description}</Text>
          <Text style={styles.cardSubtitle}>{item.director}</Text>
          <Text style={styles.cardSubtitle}>{item.cost}</Text>
          <Text style={styles.cardSubtitle}>{item.stock}</Text>
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="delete" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}></Text>
      <Text style={styles.subHeader}>CHARACTER</Text>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.fab}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  header: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 20,
    color: '#A62948',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 80,
  },
  card: {
    backgroundColor: '#800F2F',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 50,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#800F2F',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DashboardCharacter;
