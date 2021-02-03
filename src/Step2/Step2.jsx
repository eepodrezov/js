import React, {  useState } from 'react'
import style from './Step2.module.css'
import Site from '../Site/Site'
import { BrowserRouter , Route , Link } from "react-router-dom"
import createBrouserHistory from "history/createBrowserHistory"
import HeaderForm from './HeaderForm/HeaderForm'
import TextForm from './TextForm/TextForm'
import ImageForm from './ImageForm/ImageForm'
import ColumnForm from './ColumnForm/ColumnForm'

const history = createBrouserHistory();



const Step2 = () => {
    const [header, setHeader] = useState({
        headerText : '',
        headerColor: '',
        headerBG: ''

    });

    const HeaderChange = (newValue) => {
        setHeader(newValue);
    }

    const [text, setText] = useState({
        textContent : '',
        textColor : '',
        textBG : '' 
    })
    const TextChange = (newValue) => {
        setText(newValue);
    }
    const [columns , setColumns] = useState({
        column1 : '',
        column2 : '',
        column3 : ''
    })
    const ColumnsChange = (newValue) => {
        setColumns(newValue);
    }
    const [image , setImage] = useState();
    const ImageChange = (newValue) => {
        setImage(newValue)
    }

    

    return (
        <div className={style.container}>
            <div className={style.header}>
                <BrowserRouter history={history}>
                    <div className={style.formSwitcher}>
                        <ul>
                            <li><Link to="/step2">Заголовок</Link></li>
                            <li><Link to="/text">Текст</Link></li>
                            <li><Link to="/image">Картинка</Link></li>
                            <li><Link to="/columns">Колонки</Link></li>
                        </ul>
                    </div>
                    <div>
                        {/* <HeaderFrom handler={HeaderChange}/> */}
                        {/* <TextForm handler={TextChange}/> */}
                        {/* <ImageForm handler={ImageChange}/> */}
                        {/* <ColumnForm handler={ColumnsChange}/> */}
                        <Route exact path="/step2" render={()=><HeaderForm handler={HeaderChange}/>}/> 
                        <Route path="/text" render={()=><TextForm handler={TextChange}/>}/> 
                        <Route path="/image" render={()=><ImageForm handler={ImageChange}/>}/> 
                        <Route path="/columns" render={()=><ColumnForm handler={ColumnsChange}/>}/> 
                    </div>
                            
                </BrowserRouter>
                            
                            
            </div>
                    
            <Site   headerText={header.headerText} headerTextColor={header.headerColor}  headerBG={header.headerBG} 
                    textContent={text.textContent}   textContentColor={text.textColor}  textBG={text.textBG} 
                                        image={image} 
                    column1Text={columns.column1}  column2Text={columns.column2}  column3Text={columns.column3}
            />
        </div>
    )        
    
}

export default Step2;