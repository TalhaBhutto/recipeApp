import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

function CategoriesScreen(props) {
    return (
        <View style={styles.screen} >
            <Text>The Category Screen</Text>
        </View>
    )
}

styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});

export default CategoriesScreen
