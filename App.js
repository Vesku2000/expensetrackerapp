import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();


export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      
    </NavigationContainer>
    
    </>
    
  );
}


