import React, { Component } from 'react'
import style from "./../css/Glass.module.css";
export default class Glass extends Component {
    render() {
        return (
            <div onClick={() => { this.props.setCurIndex(this.props.id); console.log(this.props.id); }} className={`${style.img} col-lg-2`}>
                <img src={process.env.PUBLIC_URL + this.props.url} alt={this.props.url} />
            </div>
        )
    }
}
