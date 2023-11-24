import Product from './index';
import { Header } from '../../src/components/header';
import { useLocalSearchParams } from 'expo-router';


export default function HomeLayout() {
    const local = useLocalSearchParams();
    const sId = local.params.id
    console.log('Carregando produto id:'+ sId)

    const productsData = require('../../src/assets/templates/productsData')
  return (
    <>
      <Header page={2}/>
      <Product e={sId} data={productsData} />
    </>
  );
}