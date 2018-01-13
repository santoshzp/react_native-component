import React, {Component} from 'react';
import {View, Text, Tuochable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = (props) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={{}}>
                    <Icon
                        name={'bars'}
                        size={20}
                        color={'black'}
                    />
                </View>
                <View style={{}}>
                    <Icon
                        name={'bars'}
                        size={20}
                        color={'black'}
                    />
                    <Text>{props.headerText}</Text>
                </View>
                <View>
                    <Text>{'avatar'}</Text>
                    <Icon
                        name={'bars'}
                        size={20}
                        color={'black'}
                    />
                    <Icon
                        name={'bars'}
                        size={20}
                        color={'black'}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {

        flex: 0.1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',

        // height: 60,
        // paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2

    }
});
export default Header;