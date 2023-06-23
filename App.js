import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import Header from './Componentes/Header.js';
import Footer from './Componentes/Footer.js';
import Body from './Componentes/Body.js';

export default class App extends React.Component{
    render(){
      constructor(props){
        super(props);
        this.showtext = true;
        this.showbutton = true;
      }
      
      return (
      <ScrollView style = {{marginTop:20, flex:1}}>
        {
          (this.showtext)
          ?
          <Text>Text</Text>
          :
          <View></View>
        }
        {
          (this.showbutton)
          ?
          <Button title = "Button"></Button>
          :
          <View></View>
        }
      </ScrollView>
  );
 }
}
//ScrollView / U need put this for Scroll your text or another things!