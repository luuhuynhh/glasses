import React, { Component } from 'react'
import style from "./../css/Modal.module.css"
import model from "../asserts/images/model.jpg"
export default class Modal extends Component {
    render() {
        let name = this.props.glass?.name;
        let desc = this.props.glass?.desc;
        let url = this.props.glass?.url;
        console.log(name, desc);
        return (
            <div className={`${style.modal} mt-5`} >
                <div className={style.content}>
                    <img src={model} alt="modal" />
                    {
                        this.props.glass &&
                        <>
                            <div className={style.productInf}>
                                <h4>{name}</h4>
                                <p>{desc}</p>
                            </div>
                            <img className={style.vGlass} src={process.env.PUBLIC_URL + url} alt={url} />
                        </>
                    }
                </div>
            </ div>
        )
    }
}
