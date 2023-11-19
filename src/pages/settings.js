import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

export default function Settings() { 
  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.view}>
      <Text style={{fontFamily: 'Inter_400Regular'}}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view:{

  }
})

