import React from 'react';
import {View, Image, Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Icon from 'react-native-vector-icons/FontAwesome';
const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image} = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnaillContainerStyle}>
                    <Image
                        source={{uri: thumbnail_image}}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.subView}>
                    <Text style={styles.headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
        </Card>
    );
};
const styles = {
    constiner: {
        flexDirection: 'row'
    },
    subView: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 50,
        width: 50
    },
    thumbnaillContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};
export default AlbumDetail;