import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
    return (
        <View style = {{backgroundColor: '#400c06', padding: 20}}>
        <Text style = {{textAlign: 'center', fontSize: 30, color: 'white'}}>Header Test</Text>
        </View>
    )
}

export default Header
//<View style = {{backgroundColor: '#400c06', padding: 20}}> // In this class i learning more things  about styles i can use this link for see eveything: https://reactnative.dev/docs/stylesheet