import  Category  from './index';
import { Header } from '../../src/components/header';
import { useLocalSearchParams } from 'expo-router';


export default function CatLayout() {
    const local = useLocalSearchParams();

    const categories = [
        {
          name: 'Alimentos',
          ico: 'food-apple-outline',
          co1: '#D13415',
          co2: '#FFCDC2',
          type: 'Al',
          icoType: 'MaterialCommunityIcons',
        },
        {
          name: 'Roupas',
          ico: 'shirt-outline',
          co1: '#815E46',
          co2: '#EBDACA',
          type: 'Ro',
          icoType: 'Ionicons',
        },
        {
          name: 'Escritório',
          ico: 'paperclip',
          co1: '#BF841E',
          co2: '#FBE577',
          type: 'Of',
          icoType: 'MaterialCommunityIcons',
        },
        {
          name: 'Limpeza',
          ico: 'cleaning-services',
          co1: '#638336',
          co2: '#D3E7A6',
          type: 'Li',
          icoType: 'MaterialIcons',
        },
        {
          name: 'Brinquedos',
          ico: 'teddy-bear',
          co1: '#8A1D79',
          co2: '#E7A6DD',
          type: 'Br',
          icoType: 'MaterialCommunityIcons',
        },
        {
          name: 'Saúde',
          ico: 'healing',
          co1: '#CF560A',
          co2: '#FFD19A',
          type: 'He',
          icoType: 'MaterialIcons',
        },
        {
            name: 'Livros',
            ico: 'book-outline',
            co1: '#CF560A',
            co2: '#FFD19A',
            type: 'Li',
            icoType: 'MaterialIcons',
          },
          {
            name: 'Eletronicos',
            ico: 'washing-mmachine',
            co1: '#CF560A',
            co2: '#FFD19A',
            type: 'El',
            icoType: 'MaterialIcons',
          },
      ];
      const sCat = categories.find(category => category.name === local.params.name);

      const productsData = require('../../src/assets/templates/productsData')

      const sProducts = productsData.filter(product => product.Type === sCat.type);
      console.log('Carregando produtos da key:' + sCat.type)

  return (
    <>
      <Header page={2}/>
      <Category selected={sCat} catPro={sProducts}/>
    </>
  );
}