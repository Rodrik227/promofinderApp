import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';

export default function Page() {

    return <Redirect 
    href={{
        pathname: "/home",
        params: { id: 'bacon' }
      }} 
    />
}