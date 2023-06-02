import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import Header from './Componentes/Header.js';
import Footer from './Componentes/Footer.js';
import Body from './Componentes/Body.js';

export default class App extends React.Component{

  render(){
    return (
    <ScrollView style = {{marginTop:20, flex:1}}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </ScrollView>
  );
 }
}
//ScrollView / U need put this for Scroll your text or another things!