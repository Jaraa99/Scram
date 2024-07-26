import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem, Image, Alert, Modal, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navegation/StackNavigator';

type Scene = {
  id: string;
  description: string;
  cost: string;
  stock: string;
  imageUrl: string; 
};

const initialScenes: Scene[] = [
  { id: '1', description: 'Scene 1: Death of Tatum Riley', cost: 'Cost 1', stock: 'Stock 1', imageUrl: 'https://i.pinimg.com/736x/bb/6c/e0/bb6ce0684909fe820b255d15c3edd085.jpg' },
  { id: '2', description: 'Scene 2: Death of Casey Becker', cost: 'Cost 2', stock: 'Stock 2', imageUrl: 'https://i.pinimg.com/564x/dc/bc/e9/dcbce97de1fa052a41034c5ea6d9f055.jpg' },
  { id: '3', description: 'Scene 3: Death of Billi Loomis', cost: 'Cost 3', stock: 'Stock 3', imageUrl: 'https://pbs.twimg.com/tweet_video_thumb/EdYa7ILXkAAqtkw.jpg' },
  { id: '4', description: 'Scene 4: Death of Stu Macher', cost: 'Cost 4', stock: 'Stock 4', imageUrl: 'https://i.pinimg.com/564x/79/b5/96/79b59609fa71f0aa8dc230c265a9d020.jpg' },
  { id: '5', description: 'Scene 5: Death of Cici Cooper', cost: 'Cost 5', stock: 'Stock 5', imageUrl: 'https://i.ytimg.com/vi/khnicq5Qwh4/maxresdefault.jpg' },
];

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Dashboard'>;

const DashboardScene: React.FC = () => {
  const [scenes, setScenes] = useState<Scene[]>(initialScenes);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingScene, setEditingScene] = useState<Scene | null>(null);
  const [newDescription, setNewDescription] = useState('');
  const [newCost, setNewCost] = useState('');
  const [newStock, setNewStock] = useState('');
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  const handleAddScene = () => {
    const newScene: Scene = {
      id: (scenes.length + 1).toString(),
      description: `New Scene ${scenes.length + 1}`,
      cost: `Cost ${scenes.length + 1}`,
      stock: `Stock ${scenes.length + 1}`,
      imageUrl: 'https://via.placeholder.com/100', // Placeholder image
    };
    setScenes([...scenes, newScene]);
  };

  const handleDeleteScene = (id: string) => {
    Alert.alert(
      'Delete Scene',
      'Are you sure you want to delete this scene?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: () => setScenes(scenes.filter(scene => scene.id !== id)),
        },
      ],
      { cancelable: true }
    );
  };

  const handleEditScene = (scene: Scene) => {
    setEditingScene(scene);
    setNewDescription(scene.description);
    setNewCost(scene.cost);
    setNewStock(scene.stock);
    setIsModalVisible(true);
  };

  const handleSaveEdit = () => {
    if (editingScene) {
      setScenes(scenes.map(scene =>
        scene.id === editingScene.id
          ? { ...scene, description: newDescription, cost: newCost, stock: newStock }
          : scene
      ));
      setIsModalVisible(false);
    }
  };

  const renderItem: ListRenderItem<Scene> = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Characters')}>
      <View style={styles.card}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.description}</Text>
          <Text style={styles.cardSubtitle}>{item.cost}</Text>
          <Text style={styles.cardSubtitle}>{item.stock}</Text>
        </View>
        <View style={styles.cardActions}>
          <TouchableOpacity onPress={() => handleEditScene(item)}>
            <MaterialIcons name="edit" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteScene(item.id)}>
            <MaterialIcons name="delete" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FILMS</Text>
      <Text style={styles.subHeader}>SCENES</Text>
      <FlatList
        data={scenes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
      <TouchableOpacity style={styles.fab} onPress={handleAddScene}>
        <MaterialIcons name="add" size={24} color="white" />
      </TouchableOpacity>

      {/* Edit Scene Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Edit Scene</Text>
          <TextInput
            style={styles.input}
            value={newDescription}
            onChangeText={setNewDescription}
            placeholder="Description"
          />
          <TextInput
            style={styles.input}
            value={newCost}
            onChangeText={setNewCost}
            placeholder="Cost"
          />
          <TextInput
            style={styles.input}
            value={newStock}
            onChangeText={setNewStock}
            placeholder="Stock"
          />
          <Button title="Save" onPress={handleSaveEdit} />
          <Button title="Cancel" onPress={() => setIsModalVisible(false)} color="red" />
        </View>
      </Modal>
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
    width: 100,
    height: 100,
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
  modalContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default DashboardScene;
