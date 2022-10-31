import React, { Component } from 'react'
import style from "../css/Title.module.css";
export default class Title extends Component {
    render() {
        return (
            <div className={style.title}><span className={style.content}>Try glass app online</span></div>
        )
    }
}
