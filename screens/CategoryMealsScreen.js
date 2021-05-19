import React from 'react'
import {View,Text,StyleSheet} from 'react-native';

function CategoryMealsScreen() {
    return (
        <View style={styles.screen} >
             <Text>The Category Meals Screen</Text>
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


export default CategoryMealsScreen
