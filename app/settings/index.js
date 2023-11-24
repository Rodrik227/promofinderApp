import React  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function Settings() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Configurações</Text>
      <View style={styles.config}>
        <View>
          <Text style={styles.h1}>Localização:</Text>
          <Text style={styles.h2}>Atual: Santa Cruz do Sul - Centro</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="reload" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    marginLeft: '5%',
    width: '90%',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 30,
    marginBottom: 20,
    marginTop: 7,
  },
  config: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 5
  },
  h1: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
  },
  h2: {
    fontSize: 16,
  },
});
