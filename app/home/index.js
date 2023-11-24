import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList,Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from "expo-router";


export default function HomeScreen({stores}) {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const products = [
    {
      Name: "Macarrão Instantâneo",
      Marca: "MarcaTemplate",
      PrecoP: "5,25",
      PrecoD: "4,20",
      Desc: "20%",
      img: require("../../src/assets/templates/imgs/1.jpg"),
      id: 1
    },
    {
      Name: "Camiseta de Algodão",
      Marca: "FashionStyle",
      PrecoP: "20,00",
      PrecoD: "15,00",
      Desc: "25%",
      img: require("../../src/assets/templates/imgs/camisa.png"),
      id: 2
    },
    {
      Name: "Smartphone Avançado",
      Marca: "TechGadget",
      PrecoP: "800,00",
      PrecoD: "700,00",
      Desc: "12%",
      img: require("../../src/assets/templates/imgs/cel.png"),
      id: 3
    },
    {
      Name: "Chocolate ao leite 500g",
      Marca: "Chocolatão",
      PrecoP: "6,00",
      PrecoD: "5,00",
      Desc: "23%",
      img: require("../../src/assets/templates/imgs/2.jpg"),
      id: 4
    },
    {
      Name: "Fone de Ouvido sem Fio",
      Marca: "SonicAudio",
      PrecoP: "50,00",
      PrecoD: "40,00",
      Desc: "20%",
      img: require("../../src/assets/templates/imgs/fone.png"),
      id: 5
    },
    {
      Name: "Tênis Esportivo",
      Marca: "RunFit",
      PrecoP: "60,00",
      PrecoD: "45,00",
      Desc: "25%",
      img: require("../../src/assets/templates/imgs/tenis.png"),
      id: 6
    }
  ];
  

  return (
    <ScrollView
    >
      <ScrollView
      horizontal

       style={styles.categorys}
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
       >
      <Link
        href={{
          pathname: '/category',
          params: { name: 'Alimentos'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#FFCDC2' }]}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons name='food-apple-outline' size={60} color={'#D13415'} />
          <Text style={[styles.categText, { color: '#D13415' }]}>Alimentos</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: '/category',
          params: { name: 'Roupas'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#EBDACA' }]}
      >
        <TouchableOpacity>
          <Ionicons name='shirt-outline' size={60} color={'#815E46'} />
          <Text style={[styles.categText, { color: '#815E46' }]}>Roupas</Text>
        </TouchableOpacity>
      </Link>
      <Link
        href={{
          pathname: '/category',
          params: { name: 'Escritório'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#FBE577' }]}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons name='paperclip' size={60} color={'#BF841E'} />
          <Text style={[styles.categText, { color: '#BF841E' }]}>Escritório</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: '/category',
          params: { name: 'Limpeza'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#D3E7A6' }]}
      >
        <TouchableOpacity>
          <MaterialIcons name='cleaning-services' size={60} color={'#638336'} />
          <Text style={[styles.categText, { color: '#638336' }]}>Limpeza</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: '/category',
          params: { name: 'Brinquedos'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#E7A6DD' }]}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons name='teddy-bear' size={60} color={'#8A1D79'} />
          <Text style={[styles.categText, { color: '#8A1D79' }]}>Brinquedos</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: '/category',
          params: { name: 'Saúde'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#FFD19A' }]}
      >
        <TouchableOpacity>
          <MaterialIcons name='healing' size={60} color={'#CF560A'} />
          <Text style={[styles.categText, { color: '#CF560A' }]}>Saúde</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: '/category',
          params: { name: 'Livros'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#CEAFFF' }]}
      >
        <TouchableOpacity>
          <Ionicons name='book-outline' size={60} color={'#410D97'} />
          <Text style={[styles.categText, { color: '#410D97' }]}>Livros</Text>
        </TouchableOpacity>
      </Link>

      <Link
        href={{
          pathname: '/category',
          params: { name: 'Eletrônicos'},
        }}
        asChild
        style={[styles.category, { backgroundColor: '#A1CCCF' }]}
      >
        <TouchableOpacity>
          <MaterialCommunityIcons name='washing-machine' size={60} color={'#097087'} />
          <Text style={[styles.categText, { color: '#097087' }]}>Eletrônicos</Text>
        </TouchableOpacity>
      </Link>

      </ScrollView>
      <Text style={{marginLeft: 22,fontSize: 27}}>Para você:</Text>
      <FlatList
            horizontal

            style={styles.products}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={products}
            keyExtractor={(item, index) => index.toString()}
             renderItem={({ item }) => (
              <Link 
              href={{
                pathname: "/product",
                params:  {id: item.id},
              }} 
              asChild>
              <TouchableOpacity style={styles.product}>
                <Image style={{height: 160, aspectRatio: 1/1, borderRadius: 10}} source={item.img}></Image>
                <Text style={{fontSize: 17, color: '#585858'}}>{item.Name} - {item.Marca}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                    <View>
                        <Text style={{fontSize: 20}}>R${item.PrecoD}</Text>
                        <Text style={{fontSize: 15, color: '#585858',textDecorationLine:'line-through'}}>R${item.PrecoP}</Text>
                    </View>
                    <Text style={{
                        fontSize: 16,
                        backgroundColor: '#FFD19A',
                        color: '#582D1D',
                        padding: 4, 
                        paddingHorizontal: 5,
                        borderRadius:10
                        }}
                        >-{item.Desc}</Text>
                </View>
            </TouchableOpacity>
            </Link>
            )}
          >
      </FlatList>
      <Text style={{marginLeft: 22,fontSize: 27}}>Lojas em sua região:</Text>
      <FlatList
            horizontal

            style={styles.stores}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={stores}
            keyExtractor={(item, index) => index.toString()}
             renderItem={({ item }) => (
              <Link 
              href={{
                pathname: "/store",
                params:  {id: item.name},
              }} 
              asChild>
              <TouchableOpacity style={styles.product}>
                <Image style={{height: 120, aspectRatio: 1/1, borderRadius: 20}} source={item.img}></Image>
                <Text style={{fontSize: 22}}>{item.name}</Text>
                <Text></Text>
            </TouchableOpacity>
            </Link>
            )}
          >
      </FlatList>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categText:{
    fontFamily: 'Inter_400Regular',
    fontSize: 17
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
  stores:{
    marginTop: 5,
    padding: 12,
    flexDirection: 'row',
  },
  store:{
   borderRadius: 10,
   width: 160,
   marginHorizontal: 0
  },
  categorys:{
    marginTop: 32,
    padding: 12,
    flexDirection: 'row',
    height: 150,
  },
  category:{
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'lightblue',
    aspectRatio: 1/1,
    marginRight: 7,
    marginLeft: 7,
    width: 105.,
    borderRadius: 17,
    // Sombras para iOS
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    // Sombras para Android
    elevation: 10,
  }
})