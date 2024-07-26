import React, { useState, useEffect } from 'react';
import { TextInput, Button, View, StyleSheet, ScrollView } from 'react-native';
import apiClient from '../../Utils/apiClient';
import { Character } from '../../Utils/models';

const EditCharacter = ({ route, navigation }: any) => {
  const { character } = route.params;
  const [updatedCharacter, setUpdatedCharacter] = useState<Character>(character);

  useEffect(() => {
    setUpdatedCharacter(character);
  }, [character]);

  const handleSave = async () => {
    try {
      await apiClient.put(`/character/${updatedCharacter.id}`, updatedCharacter);
      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Description"
          value={updatedCharacter.description}
          onChangeText={text => setUpdatedCharacter(prev => ({ ...prev, description: text }))}
          style={styles.input}
        />
        <TextInput
          placeholder="Cost"
          value={updatedCharacter.cost.toString()}
          onChangeText={text => setUpdatedCharacter(prev => ({ ...prev, cost: parseFloat(text) }))}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Name Actor"
          value={updatedCharacter.nameActor}
          onChangeText={text => setUpdatedCharacter(prev => ({ ...prev, nameActor: text }))}
          style={styles.input}
        />
        <TextInput
          placeholder="Role"
          value={updatedCharacter.rol}
          onChangeText={text => setUpdatedCharacter(prev => ({ ...prev, rol: text }))}
          style={styles.input}
        />
        <TextInput
          placeholder="Importance"
          value={updatedCharacter.importance}
          onChangeText={text => setUpdatedCharacter(prev => ({ ...prev, importance: text }))}
          style={styles.input}
        />
        <TextInput
          placeholder="Scene Description"
          value={updatedCharacter.sceneDescription}
          onChangeText={text => setUpdatedCharacter(prev => ({ ...prev, sceneDescription: text }))}
          style={styles.input}
        />
      </View>
      <Button title="Save" onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1a001a', 
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#8a2be2', 
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 10,
    backgroundColor: '#330033', 
    color: '#ffffff', 
  },
  button: {
    backgroundColor: '#0000ff', 
    paddingVertical: 6, 
    paddingHorizontal: 10, 
    borderRadius: 4, 
    alignItems: 'center',
    marginTop: 10,
    width: 100,
    alignSelf: 'flex-end', 
  },
  addButton: {
    backgroundColor: '#0000ff', 
    paddingVertical: 6, 
    paddingHorizontal: 10, 
    borderRadius: 4, 
    alignItems: 'center',
    marginTop: 20,
    width: 150, 
    alignSelf: 'center', 
  },
  buttonText: {
    color: '#ffffff', 
    fontSize: 14,
  },
  item: {
    padding: 15,
    borderWidth: 1, 
    borderColor: '#8a2be2', 
    marginBottom: 10,
    backgroundColor: '#330033', 
    borderRadius: 8,
  },
  itemText: {
    color: '#ffffff', 
    fontSize: 16,
  },
});
  
  

export default EditCharacter;
