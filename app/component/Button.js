import React, {Component} from 'react';
import {TouchableOpacity, Text, Linking} from 'react-native';

const Button = ({url, title}) => {
    const {buttonStyle, textStyle} = styles;
    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={() => Linking.openURL(url)}
        >
            <Text style={textStyle}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        borderColor: '#007aff',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 5,
        marginLeft: 5
    }
};
export default Button;