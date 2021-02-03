import React from 'react'
import style from '../Step2.module.css'

const ColumnForm = ({handler}) => {
        const columns = {
            column1: '',
            column2: '',
            column3: ''
        }

        const handleColumn1 = (event) => {
            columns.column1 = event.target.value
            
        }
        const handleColumn2 = (event) => {
            columns.column2 = event.target.value
            
        }
        const handleColumn3 = (event) => {
            columns.column3 = event.target.value
            
        }

        const handleChange  = (event) => {
            handler(columns)
        }
        return (
            <div className={style.formContainer}>
                <div className={style.formHeader}>Остается только заполнить колонки!</div>
                <div className={style.formText}></div>
                <div className={style.form}>
                     <input type="text" placeholder="Первая колонка" onChange={handleColumn1} />
                     <input type="text" placeholder="Вторая колонка" onChange={handleColumn2} />
                     <input type="text" placeholder="Третья колонка" onChange={handleColumn3} />
                     <button onClick={handleChange}>GO</button>
                </div>
            </div>
            
        )
}


export default ColumnForm;