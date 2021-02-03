import React, { Component } from 'react'
import style from './Step1.module.css'
import Site from '../Site/Site'
import {Link} from 'react-router-dom'

export default class Step1 extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.header}>
                    <div className={style.headerText}><h2>Хотите сами создать такой сайт?</h2></div>
                    <div className={style.headerButton}><Link to="/step2">ХОЧУ!</Link></div>
                </div>
                <Site   headerText="Заголовок вашего сайта"  headerTextColor="white"  headerBG="black" 
                        textContent="Текст, который вы бы хотели разместить на вашем сайте"   textContentColor="black"  textBG="grey" 
                                    image="1" 
                        column1Text="Информация, которую"  column2Text="вы хотели бы разместить"  column3Text="в три колонки"
                />
            </div>
        )
    }
}
