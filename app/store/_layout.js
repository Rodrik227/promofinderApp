import  Store  from './index';
import { Header } from '../../src/components/header';
import { useLocalSearchParams } from 'expo-router';

export default function StoreScreen() {
    const local = useLocalSearchParams();
    const sId = local.params.id
    console.log('Carregando produto id:'+ sId)

  const storesData = require('../../src/assets/templates/storesData.js')
  const sStore = storesData.find(store => store.name === sId);
  return (
    <>
      <Header page={2}/>
      <Store store={sStore}/>
    </>
  );
}