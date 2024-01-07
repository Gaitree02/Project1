import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Dimensions, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login1 from'./LoginPages/Login';


import LoginThird from './LoginPages/LoginThird';
import LoginSecond from './LoginPages/LoginSecond';
import LoginFourth from './LoginPages/LoginFourth';
import EntrySheet from './LoginPages/EntrySheet';
import TimeSheet from './LoginPages/TimeSheet2';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    

    <NavigationContainer>
   <Stack.Navigator  screenOptions={{
    headerShown: false
  }} >
     <Stack.Screen  name="login" component={Login1} />
      
     <Stack.Screen  name="LoginSecond" component={LoginSecond} />
     <Stack.Screen  name="loginThird" component={LoginThird} />
   <Stack.Screen  name="loginFourth" component={LoginFourth} /> 
   <Stack.Screen  name="EntrySheet" component={EntrySheet} />
   <Stack.Screen  name="TimeSheet" component={TimeSheet} />

   </Stack.Navigator>
 </NavigationContainer>
  );
}

