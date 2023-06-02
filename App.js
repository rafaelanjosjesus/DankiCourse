import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component{
//exportdefault... You need put this in all your projects!
    
    render(){ 
        return(
            <view style = {styles.container}>
                <Text>Hello world</Text>
                <StatusBar style = "auto" />
            </view>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

//BackgroundColor = i can use for change my background color!
//alignItems and justifyContent = i can use for align my itens!
//Render = all the things u put in inside of the render u can see in your app!
//import = You use this for import your things!