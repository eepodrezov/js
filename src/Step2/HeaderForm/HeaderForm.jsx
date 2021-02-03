import React from 'react'
import style from '../Step2.module.css'

const HeaderForm = ({handler}) => {
        const header = {
            headerText: '',
            headerColor: '',
            headerBG: ''
        }

        const handleHeaderText = (event) => {
            header.headerText = event.target.value
            
        }
        const handleHeaderColor = (event) => {
            header.headerColor = event.target.value
            
        }
        const handleHeaderBG = (event) => {
            header.headerBG = event.target.value
            
        }

        const handleChange  = (event) => {
            handler(header)
        }
        return (
            <div className={style.formContainer}>
                <div className={style.formHeader}>Отлично! Начнем с заголовка вашего сайта!</div>
                <div className={style.formText}></div>
                <div className={style.form}>
                     <input type="text" placeholder="Текст заголовка" onChange={handleHeaderText} />
                     <input type="text" placeholder="Цвет текста (black/red/white)" onChange={handleHeaderColor} />
                     <input type="text" placeholder="Цвет фона (black/red/white)" onChange={handleHeaderBG} />
                     <button onClick={handleChange}>GO</button>
                </div>
            </div>
            
        )
}


export default HeaderForm;