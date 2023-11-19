import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export function Header() {
  const navigation = useNavigation();


  const goToSettings = () => {
    navigation.navigate('Settings'); // 'Settings' é o nome da tela configurado no Stack.Navigator
  };

  return (
    <SafeAreaView style={styles.view}>
      <Image source={require('../assets/icon.png')} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
      />
      <TouchableOpacity>
        <MaterialIcons name="search" size={30} color="#63635E" />
      </TouchableOpacity>
      <TouchableOpacity onPress={goToSettings}>
        <MaterialCommunityIcons name="cog" size={30} color="#63635E" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  view: {
    height: '12%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // Sombras para iOS
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    // Sombras para Android
    elevation: 10,
    paddingBottom: 10
  },
  icon: {
    width: 35,
    height: 35
  },
  input: {
    height: 40,
    padding: 10,
    width: '65%',
    backgroundColor: "#F1F1F1",
    borderRadius: 20
  },
});
