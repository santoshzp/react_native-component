import React, {Component} from 'react';
import {View, Text, Tuochable, StyleSheet} from 'react-native';
const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.headerText}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

        // flex: 0.1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2

    }
});
export default Header;
