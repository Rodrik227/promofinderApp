import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList,Image } from 'react-native';
import Stars from 'react-native-stars';

export default function Store(store) {

    return(
        <ScrollView style={{height: '100%'}}>
            <Image style={styles.banner} source={require('../../src/assets/templates/imgs/techb.png')}/>
            <Image style={styles.logo} source={require('../../src/assets/templates/imgs/techson.png')}/>
            <View>
            <Text style={styles.category}>Eletrônicos</Text>
            <Text style={styles.name}>Techson</Text>
            <Stars
            display={3.5}
            spacing={8}
            count={5}
            starSize={40}
            half={true}
            fullStar= {require('../../src/assets/stars/full.png')}
            emptyStar= {require('../../src/assets/stars/none.png')}
            halfStar= {require('../../src/assets/stars/half.png')}
            />
            </View>
            


        </ScrollView>
    )
}
const styles = StyleSheet.create({
    banner:{
        maxWidth: '100%',
        height: 180
    },
    logo:{
        height: 120,
        width: 120,
        zIndex: 20,
        position: 'absolute',
        marginTop: 120,
        borderRadius: 10,
        marginLeft: 20,
        borderColor: 'white',
        borderWidth: 2
    },
    category:{
        fontSize: 20,
        backgroundColor: '#FFD19A',
        color: '#582D1D',
        padding: 4, 
        paddingHorizontal: 5,
        borderRadius:10,
        width: 120,
        textAlign: 'center',
        marginLeft:  150,
        marginTop: 20
    },
    name:{
        fontSize: 25,
        marginLeft: 20,
        maxWidth: 200
    }
    
})