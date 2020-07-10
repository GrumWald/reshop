import React, { Component } from 'react'

import Photo from './Photo';

export class Photos extends Component {
    render() {
        return this.props.photos.map( ( photo ) => (
            <Photo key={photo.id} photo={photo} />
         ));
    }
}

export default Photos
