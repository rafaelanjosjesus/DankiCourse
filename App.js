import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
//Import: I need put Image in my import because i need to import my image from somewhere!
export default class App extends React.Component{ 
    render(){ 
        return(
            <view>
                <Text>Hello world</Text>
                <Image style = {{width:50, height:100}}
                source = {{
                    uri: 'https://avatars.githubusercontent.com/u/117334834?v=4'
                }} />
            </view>
        );
    }
}
//Image style = this style that I put in my image is because I need to put some style in my image for it to load!
//uri = is link of my image!
//Width Height: I need put this for give width and height for my image!