import {AppRegistry, View} from 'react-native';
import React from 'react';
import Header from './app/component/header';
import AlbumList from './app/component/AlbumList';
const App = () => (
    <View style={{flex: 1}}>
        <Header headerText={'Login'}/>
        <AlbumList/>
    </View>
);
AppRegistry.registerComponent('react_native_component', () => App);
