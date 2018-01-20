import React from 'react';
import {View, Image, Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from './Button';
const AlbumDetail = ({album}) => {
    const {title, artist, image, thumbnail_image, url} = album;
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
            <CardSection>
                <Image
                    source={{uri: image}}
                    style={styles.imageStyleSecond}

                />
            </CardSection>
            <CardSection>
                <Button
                    url={url}
                    title={'Bay Now'}
                />
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
    imageStyleSecond: {
        height: 300,
        width: null,
        flex: 1
    },
    thumbnaillContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};
export default AlbumDetail;