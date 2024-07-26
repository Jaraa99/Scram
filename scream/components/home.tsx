import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navegation/StackNavigator';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add authentication logic here (e.g., API call)
    if (username === 'Juan' && password === '12345') {
      navigation.navigate('Dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          <img src="https://www.shareicon.net/data/2016/01/09/239144_scream_256x256.png" alt="" />
        </Text>
      </View>
      <Text style={styles.title}>ＳＣＲＥＡＭ</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    fontSize: 100,
    color: '#FFFFFF',
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
