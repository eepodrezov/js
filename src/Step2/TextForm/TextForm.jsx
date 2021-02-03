import React from 'react'
import style from '../Step2.module.css'

const TextForm = ({handler}) => {
        const text = {
            textContent: '',
            textColor : '',
            textBG : ''
        }

        const handleTextContent = (event) => {
            text.textContent = event.target.value
            
        }
        const handleTextColor = (event) => {
            text.textColor = event.target.value
            
        }
        const handleTextBG= (event) => {
            text.textBG = event.target.value
            
        }

        const handleChange  = (event) => {
            handler(text)
        }
        return (
            <div className={style.formContainer}>
                <div className={style.formHeader}>Теперь придумаем и оформим текст для вашего сайта!</div>
                <div className={style.formText}></div>
                <div className={style.form}>
                     <input type="text" placeholder="Текст для вашего сайта" onChange={handleTextContent} />
                     <input type="text" placeholder="Цвет текста (black/red/white)" onChange={handleTextColor} />
                     <input type="text" placeholder="Цвет фонв (black/red/white)" onChange={handleTextBG} />
                     <button onClick={handleChange}>GO</button>
                </div>
            </div>
            
        )
}


export default TextForm;