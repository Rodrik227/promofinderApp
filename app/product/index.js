import { Text, ScrollView, View, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Product({e}) {

    const products = [
        {
          Name: "Macarrão Instantâneo",
          Marca: "MarcaTemplate",
          PrecoN: "5,25",
          PrecoP1: "4,20",
          PrecoP2: "4,59",
          LojaP1: "Mercado do Zé",
          LojaP2: "HipermercadoSuper",
          LojaP3: "SupermercadoBomPreco",
          LojaP4: "AtacadoMais",
          PrecoC1: "4,00",
          PrecoC2: "4,15",
          PrecoC3: "4,30",
          LojaC1: "Atacadão",
          LojaC2: "SupermercadoBarato",
          LojaC3: "MercadoEconomico",
          img: require("../../src/assets/templates/imgs/1.jpg"),
          id: 1,
        },
        {
          Name: "Camiseta de Algodão",
          Marca: "FashionStyle",
          PrecoN: "20,00",
          PrecoP1: "12,00",
          PrecoP2: "15,00",
          LojaP1: "Loja1",
          LojaP2: "Loja2",
          PrecoC1: "10,00",
          PrecoC2: "11,00",
          PrecoC3: "12,00",
          LojaC1: "LojaC1",
          LojaC2: "LojaC2",
          LojaC3: "LojaC3",
          img: require("../../src/assets/templates/imgs/camisa.png"),
          id: 2,
        },
        {
          Name: "Smartphone Avançado",
          Marca: "TechGadget",
          PrecoN: "800,00",
          PrecoP1: "675,99",
          PrecoP2: "700,00",
          LojaP1: "LojaA",
          LojaP2: "LojaB",
          PrecoC1: "780,00",
          PrecoC2: "760,00",
          PrecoC3: "740,00",
          LojaC1: "LojaX",
          LojaC2: "LojaY",
          LojaC3: "LojaZ",
          img: require("../../src/assets/templates/imgs/cel.png"),
          id: 3,
        },
        {
          Name: "Chocolate ao leite 500g",
          Marca: "Chocolatão",
          PrecoN: "6,00",
          PrecoP1: "5,25",
          PrecoP2: "5,00",
          LojaP1: "LojaChocolate1",
          LojaP2: "LojaChocolate2",
          PrecoC1: "4,50",
          PrecoC2: "4,75",
          PrecoC3: "5,00",
          LojaC1: "LojaChocolateA",
          LojaC2: "LojaChocolateB",
          LojaC3: "LojaChocolateC",
          img: require("../../src/assets/templates/imgs/2.jpg"),
          id: 4,
        },
        {
          Name: "Fone de Ouvido sem Fio",
          Marca: "SonicAudio",
          PrecoN: "50,00",
          PrecoP1: "35,00",
          PrecoP2: "40,00",
          LojaP1: "LojaFone1",
          LojaP2: "LojaFone2",
          PrecoC1: "35,00",
          PrecoC2: "38,00",
          PrecoC3: "40,00",
          LojaC1: "LojaFoneX",
          LojaC2: "LojaFoneY",
          LojaC3: "LojaFoneZ",
          img: require("../../src/assets/templates/imgs/fone.png"),
          id: 5,
        },
        {
          Name: "Tênis Esportivo",
          Marca: "RunFit",
          PrecoN: "60,00",
          PrecoP1: "43,50",
          PrecoP2: "45,00",
          LojaP1: "LojaTenis1",
          LojaP2: "LojaTenis2",
          PrecoC1: "42,00",
          PrecoC2: "44,00",
          PrecoC3: "46,00",
          LojaC1: "LojaTenisA",
          LojaC2: "LojaTenisB",
          LojaC3: "LojaTenisC",
          img: require("../../src/assets/templates/imgs/tenis.png"),
          id: 6,
        },
      ];
      const product = products.find(product => product.id === parseInt(e));
      console.log('Montando produto:' + product.Name)
    return (
    <ScrollView >
        <View style={styles.view}>
            <Image style={styles.img} source={product.img}></Image>
            <Text style={{fontSize: 24,maxWidth: 320, textAlign: 'center'}}>{product.Name} - {product.Marca}</Text>
            <Text style={{ width: 300, fontSize: 19, marginTop: 10,color: '#585858',textDecorationLine:'line-through'}}>R${product.PrecoN}</Text>
            <Text style={{fontSize: 20, marginTop: 20}} >Em seu bairro</Text>
            <View style={[styles.store, {backgroundColor: '#FFEFD6'}]}>
                <View style={[styles.innerStore]}>
                <Text style={styles.storeName}>{product.LojaP1}</Text>
                <Text style={styles.storePrice}>R${product.PrecoP1}</Text>
                </View>
                <Feather name="map-pin" size={30} color="black" />
            </View>
            <View style={styles.store}>
                <View style={[styles.innerStore]}>
                <Text style={styles.storeName}>{product.LojaP2}</Text>
                <Text style={styles.storePrice}>R${product.PrecoP2}</Text>
                </View>
                <Feather name="map-pin" size={30} color="black" />
            </View>
            <Text style={{fontSize: 20, marginTop: 20}} >Em sua cidade</Text>
            <View style={[styles.store, {backgroundColor: '#FFEFD6'}]}>
                <View style={[styles.innerStore]}>
                <Text style={styles.storeName}>{product.LojaC1}</Text>
                <Text style={styles.storePrice}>R${product.PrecoC1}</Text>
                </View>
                <Feather name="map-pin" size={30} color="black" />
            </View>
            <View style={styles.store}>
                <View style={[styles.innerStore]}>
                <Text style={styles.storeName}>{product.LojaC2}</Text>
                <Text style={styles.storePrice}>R${product.PrecoC2}</Text>
                </View>
                <Feather name="map-pin" size={30} color="black" />
            </View>
            <View style={styles.store}>
                <View style={[styles.innerStore]}>
                <Text style={styles.storeName}>{product.LojaC3}</Text>
                <Text style={styles.storePrice}>R${product.PrecoC3}</Text>
                </View>
                <Feather name="map-pin" size={30} color="black" />
            </View>
        </View>
    </ScrollView>
    )
}
const styles = StyleSheet.create({
    view:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    img:{
        aspectRatio: 1, 
        height: 320, 
        borderRadius: 20,
        marginTop: 20
    },
    store:{
        backgroundColor: '#F1F0EF',
        width: 320,
        padding: 10,
        paddingHorizontal: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        elevation: 10,
        marginBottom: 20
    },
    storeName:{
        fontSize: 19
    },
    storePrice:{
        fontWeight: 'bold',
        fontSize: 24
    }
})
