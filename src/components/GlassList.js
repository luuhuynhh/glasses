import React, { Component } from 'react'
import Glass from './Glass'

export default class GlassList extends Component {
    render() {
        return (
            <div className='row p-5 bg-white mt-5'>
                {this.props.glassList?.map(glass => {
                    return <Glass key={glass.url} url={glass.url} id={glass.id} setCurIndex={this.props.setCurIndex} />
                })}
            </div>
        )
    }
}
