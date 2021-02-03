import React from 'react'
import style from '../Step2.module.css'

const ImageForm = ({handler}) => {


        const handleChange  = (event) => {
            handler(event.target.value)
        }
        return (
            <div className={style.formContainer}>
                <div className={style.formHeader}>Для красоты вашего сайта выберете одну из трех возможных картинок</div>
                <div className={style.formText}></div>
                <div className={style.form}>
                    <div><input name="dzen" type="radio" value="1" onChange={handleChange}/>1</div>
                    <div><input name="dzen" type="radio" value="2" onChange={handleChange}/>2</div>
                    <div><input name="dzen" type="radio" value="3" onChange={handleChange}/>3</div>  
                </div>
            </div>
            
        )
}


export default ImageForm;