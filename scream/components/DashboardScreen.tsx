import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';

type Film = {
  id: string;
  title: string;
  director: string;
  time: string;
  imageUrl: string; 
};

const films: Film[] = [
  { id: '1', title: 'Scream 1', director: 'Director: Wes Craven', time: 'Time: 114 minutos', imageUrl: 'https://i.pinimg.com/564x/a1/9d/89/a19d89222c5983e955d5f6d784f04e54.jpg' },
  { id: '2', title: 'Scream 2', director: 'Director: Wes Craven', time: 'Time: 120 minutos', imageUrl: 'https://pbs.twimg.com/media/GFyEBFAXMAAUzt9?format=jpg&name=4096x4096' },
  { id: '3', title: 'Scream 3', director: 'Director: Wes Craven', time: 'Time: 117 minutos', imageUrl: 'https://i.pinimg.com/564x/7a/fe/e9/7afee9296fc250b7adf0f4067b4ef196.jpg' },
  { id: '4', title: 'Scream 4', director: 'Director: Wes Craven', time: 'Time: 111 minutos', imageUrl: 'https://www.movieposters.com/cdn/shop/products/scream4.mp_1aa1c346-cd17-49b0-ad05-1ab59abc2b0e_480x.progressive.jpg?v=1674054616' },
];

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const renderItem: ListRenderItem<Film> = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Scenes')}>
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.director}</Text>
          <Text style={styles.cardSubtitle}>{item.time}</Text>
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
      <Text style={styles.subHeader}>FILMS</Text>
      <FlatList
        data={films}
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
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
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

export default DashboardScreen;
