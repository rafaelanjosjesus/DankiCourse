import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
export default class App extends React.Component{ 

    render(){ 
        return(
           <View style = {{marginTop: 20}}> 
           <Header></Header>
           <Body></Body>
           <Footer></Footer>
            </View>
        );
    }
}
