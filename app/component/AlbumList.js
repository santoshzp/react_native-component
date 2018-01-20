import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetial from './AlbumDetial';
class AlbumList extends Component {
    state = {album: []}
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => this.setState({album: response.data}));
    }
    renderAlbums() {
        return this.state.album.map((album) =>
            (
                <AlbumDetial
                    key={album.title}
                    album={album}
                />)
        );
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;