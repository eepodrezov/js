import React from 'react'
import style from './Site.module.css'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'

const Site = ( { headerText , headerTextColor , headerBG, 
                 textContent   , textContentColor, textBG, 
                                    image, 
                column1Text,  column2Text,  column3Text

        }) => {
        let img
        if (image === '1') {
            img = img1
        } else if (image === '2') {
            img = img2
        }else if (image === '3') {
            img = img3
        }
        const headerStyle = {
            color: headerTextColor,
            backgroundColor: headerBG,
        };
        const textStyle = {
            color: textContentColor,
            backgroundColor: textBG,
        };                     
    return (
        <div className={style.container}>
            <div className={style.header} style={headerStyle}>{headerText}</div>
            <div className={style.text} style={textStyle}>{textContent}</div>
            <div className={style.image}><img src={img} alt=""/></div>
            <div className={style.columns}>
                <div className={style.column}>{column1Text}</div>
                <div className={style.column}>{column2Text}</div>
                <div className={style.column}>{column3Text}</div>
            </div>
        </div>
    )
}

export default Site;
