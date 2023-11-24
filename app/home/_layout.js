import  HomeScreen  from './index';
import { Header } from '../../src/components/header';

export default function HomeLayout() {
  const storesData = require('../../src/assets/templates/storesData.js')
  return (
    <>
      <Header page={1}/>
      <HomeScreen stores={storesData}/>
    </>
  );
}