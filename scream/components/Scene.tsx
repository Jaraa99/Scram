import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';


type Scene = {
    id: string;
    description: string;
    cost: string;
    stock: string;
    videoUrl: string;
  };

  const scene: Scene[] = [
    {id: '1', description:'Scene 1 : Death of Tatum Riley', cost:'Cost 1', stock:'Stock 1', videoUrl: 'https://youtu.be/jE98gEqWeqo?t=101o'},
    {id: '2', description:'Scene 2 : Death of Casey Becker', cost:'Cost 2', stock:'Stock 2', videoUrl: 'https://example.com/video2.mp4'},
    {id: '3', description:'Scene 3 : Death of Billi Loomis', cost:'Cost 3', stock:'Stock 3', videoUrl: 'https://example.com/video3.mp4'},
    {id: '4', description:'Scene 4 : Death of Stu Macher', cost:'Cost 4', stock:'Stock 4', videoUrl: 'https://example.com/video4.mp4'},
    {id: '5', description:'Scene 5 : Death of Cici Cooper', cost:'Cost 5', stock:'Stock 5', videoUrl: 'https://youtu.be/uQ-U0wTMw8Y'},
];
  type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

  const DashboardScene: React.FC =()=>{
    const navigation = useNavigation<DashboardScreenNavigationProp>();

    const renderItem: ListRenderItem<Scene> = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Characters')}>
          <View style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>{item.description}</Text>
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

      return(

        <View style={styles.container}>
        <Text style={styles.header}>FILM 1</Text>
        <Text style={styles.subHeader}>SCENES</Text>
        <FlatList
          data={scene}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.list}
        />
        <TouchableOpacity style={styles.fab}>
          <MaterialIcons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    );
    

  }
  

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

  export default DashboardScene;