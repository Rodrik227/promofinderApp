import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList,Image } from 'react-native';
import { Link } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function Category({selected, catPro}) {
    let selectedIcon;

    if (selected.icoType === 'MaterialCommunityIcons') {
      selectedIcon = <MaterialCommunityIcons name={selected.ico} size={60} color={selected.co1} />;
    } else if (selected.icoType === 'MaterialIcons') {
      selectedIcon = <MaterialIcons name={selected.ico} size={60} color={selected.co1} />;
    } else if (selected.icoType === 'Ionicons') {
      selectedIcon = <Ionicons name={selected.ico} size={60} color={selected.co1} />;
    }
    return(
      <ScrollView>
      <View style={[styles.header, { backgroundColor: selected.co2 }]}>
        {selectedIcon}
        <Text style={[styles.h1, { color: selected.co1 }]}>{selected.name}</Text>
      </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          style={styles.products}
          data={catPro}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <Link
              href={{
                pathname: "/product",
                params: { id: item.id },
              }}
              asChild
            >
              <TouchableOpacity style={styles.product}>
                <Image style={{ height: 160, aspectRatio: 1 / 1, borderRadius: 10 }} source={item.img}></Image>
                <Text style={{ fontSize: 17, color: '#585858' }}>{item.Name} - {item.Marca}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                  <View>
                    <Text style={{ fontSize: 20 }}>R${item.PrecoP1}</Text>
                    <Text style={{ fontSize: 15, color: '#585858', textDecorationLine: 'line-through' }}>R${item.PrecoN}</Text>
                  </View>
                  <Text style={{
                    fontSize: 16,
                    backgroundColor: '#FFD19A',
                    color: '#582D1D',
                    padding: 4,
                    paddingHorizontal: 5,
                    borderRadius: 10
                  }}>{item.Desc}</Text>
                </View>
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    header:{
        paddingTop: '19%',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 10,
        paddingBottom: 10
    },
    h1:{
        fontSize: 40
    },
    products:{
      marginTop: 5,
      padding: 12,
      flexDirection: 'row',

    },
    product:{
     borderRadius: 10,
     width: 160,
     marginHorizontal: 10
    },
})