import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style = {styles.view}>
            <Text style ={styles.textStyle}>App Test</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    view:{
        backgroundColor: '#12004f',
        padding:20,
        width:'100%',
    },

    textStyle:{
        textAlign:'center',
        fontSize:30,
        color:'white',
    },
});

export default Header;
//const styles = StyleSheet.create // Da para declarar constantes em outra parte do codigo e depois vincular ao seu codigo por meio do styles.TextStyle!