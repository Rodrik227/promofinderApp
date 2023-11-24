import React from 'react';
import { StyleSheet, TouchableOpacity, Image, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EventEmitter } from 'eventemitter3';
import { router } from 'expo-router';


export const Screen = new EventEmitter();



export function Header({ page }) {
  let link
  let icon

 
  if(page == 1){
    icon = 'cog'
    link = '/settings'
  }else{
    icon = 'home'
    link = '/home'
  }
 function redirect() {

  console.log(`Redirecting to ${link}`);
  router.replace(link);

 }

  return (
    <SafeAreaView style={styles.view}>
      <Image source={require('../assets/icon.png')} style={styles.icon} />
      <View style={{width: '65%'}}></View>
      {/* <TextInput
        style={styles.input}
        placeholder="useless placeholder"
      /> */}
      <TouchableOpacity>
        <MaterialIcons name="search" size={30} color="#63635E" />
      </TouchableOpacity >
        <TouchableOpacity onPress={() => redirect()} >
          <MaterialCommunityIcons name={icon} size={30} color="#63635E" />
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
