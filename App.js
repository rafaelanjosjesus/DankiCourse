import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
//Import and t
export default class App extends React.Component{ 
   
    Header = () => {
        return(
            <text>Header of my app</text>
        );
    }
    Body = () => {
        return(
            <text>Body of my app</text>
        );
    }
    Footer = () => {
        return(
            <text>Footer of my app</text>
        );
    }
    render(){ 
        return(
           <view style = {{marginTop: 20}}> 
                <this.Header></this.Header>
                <this.Body></this.Body>
                <this.Footer></this.Footer>
                <Button></Button>
            </view>
        );
    }
}
const Button = () =>{
    return(
        <Button title="Click"></Button>
    );
}
//Const = This is variable const!
//Button = This is a Button in my app!
//View style = {{marginTop:20}} // This i put one marginTop in all the things is inside of this view!