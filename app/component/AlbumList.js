import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component {
    componentWillMount() {
        console.log('call compoentWIll mount call here ...');
    }
    render() {
        return (
            <View>
                <Text>some text</Text>
            </View>
        );
    }
}
export default AlbumList;