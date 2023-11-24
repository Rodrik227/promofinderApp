import { Slot } from 'expo-router';
import { Header } from '../../src/components/header';

export default function HomeLayout() {
  return (
    <>
      <Header page={2}/>
      <Slot />
    </>
  );
}