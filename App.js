import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator'
import AppLoading from 'expo-app-loading'

const fetchFonts=()=>{
 return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setFontLoaded(true)}/>
  }
  return (
    <MealsNavigator/>
   );
}

const styles = StyleSheet.create({
  
});
