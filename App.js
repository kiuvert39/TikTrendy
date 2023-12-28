import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import Tabs from './src/navigation/tab';

export default function App() {
  return (
    <NavigationContainer>
       <Tabs/>
    </NavigationContainer>
  );
}


