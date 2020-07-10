import React, { Component } from 'react'

export class Photo extends Component {
    render() {
        return (
            <div className='photo' >
                <img src = {
                    this.props.photo.thumbnailUrl
                }
                alt = {
                    this.props.photo.title
                }
                />
            </div>
        )
    }
}

export default Photo
