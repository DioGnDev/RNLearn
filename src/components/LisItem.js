import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem}>
            <Image 
                resizeMode='contain'
                source={props.placeImage} 
                style={styles.placeImage}>
            </Image>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem:{
        width: '100%',
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage: {
        margin: 8,
        height: 30,
        width: 30
    }
});

export default listItem;