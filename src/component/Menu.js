import Headmenu from './Headmenu'
import Step from './Step'
import Conversation from './Conversation'
import Button from './Button'
import PopupConfirm from './PopupConfirm'
///////////////////////////////////////////import pic for btn and aunt//////////////////////////////////////////////////
import pic_auntheader from './pic/aunt_header.png'
import pic_rice from './pic/rice.png'
import pic_mama from './pic/mama.png'
import pic_pork from './pic/pork.png'
import pic_beef from './pic/beef.png'
import pic_kapao from './pic/sweet basil.png'
import pic_karee from './pic/Curry powder.png'
import aunt_warning from './pic/aunt_conversation_warning.png'
import aunt from './pic/aunt_conversation.png'
///////////////////////////////////////////import pic for popup//////////////////////////////////////////////////

import r_b_kapao from './pic/rice-beef-kapao.jpg'
import r_b_karee from './pic/rice-beef-karee.jpg'
import r_p_kapao from './pic/rice-pork-kapao.jpg'
import r_p_karee from './pic/rice-pork-karee.jpg'

import m_b_kapao from './pic/mama-beef-kapao.jpg'
import m_b_karee from './pic/mama-beef-karee.jpg'
import m_p_kapao from './pic/mama-pork-kapao.jpg'
import m_p_karee from './pic/mama-pork-karee.jpg'
///////////////////////////////////////////import Global State//////////////////////////////////////////////////

import GlobalState from './GlobalState';
import React, { useState,useContext} from 'react';

import './cssFile/Menu.css'


const Menu = () => {
    const [state, setState] = useContext(GlobalState);
    
    const [isOpen, setIsOpen] = useState(false)

    const [popup, setPopup] = useState({
        pic : r_b_kapao,
        string : ''
    })
    const confirm = () =>{
        setState(prevState => 
            ({...prevState, string : prevState.string + 'Confirm ',}))
        if(state.kapao || state.karee){
            setIsOpen(!isOpen)
        }
        else if(state.pork || state.beef){
            setState(prevState => 
                ({...prevState,
                    pic : aunt_warning,
                    conver : '??????????????????????????????????????????????????????????????????'}))
        }
        else if(state.rice || state.mama){
            setState(prevState => 
                ({...prevState,
                    pic : aunt_warning,
                    conver : '????????????????????????????????????????????????????????????????????????'}))
        }
        else{setState(prevState => 
            ({...prevState,
                pic : aunt_warning,
                conver : '??????????????????????????????????????????????????????????????????????????????'}))}
        console.log(state)
    }
    const Click_rice = () =>{
        setState(prevState => 
            ({...prevState,
                pic : aunt, 
                rice : true, 
                mama : false, 
                string : prevState.string + '???????????? ',
                conver : '??????????????????????????????????????????????'}))
    }
    const Click_mama = () =>{
        setState(prevState => 
            ({...prevState,
                pic : aunt, 
                mama : true, 
                rice : false, 
                string : prevState.string + '??????????????? ',
                conver : '??????????????????????????????????????????????'}))
    }
    const Click_pork = () =>{
        if(state.rice || state.mama){
            setState(prevState => 
                ({...prevState,
                    pic : aunt,
                    pork : true,
                    beef : false, 
                    string : prevState.string + '????????????????????? ',
                    conver : '??????????????????????????????????????????????'}))}
        else {setState(prevState => 
            ({...prevState,
                pic : aunt_warning,
                string : prevState.string + '????????????????????? ',
                conver : '??????????????????????????????????????????????????????????????????????????????'}))}
    }
    const Click_beef = () =>{
        if(state.rice || state.mama)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                beef : true,
                pork : false, 
                string : prevState.string + '??????????????????????????? ',
                conver : '??????????????????????????????????????????????'}))}
        else{setState(prevState => 
            ({...prevState,
                pic : aunt_warning,
                string : prevState.string + '??????????????????????????? ',
                conver : '??????????????????????????????????????????????????????????????????????????????'}))}
    }
    const Click_kapao = () =>{
        if(state.rice && state.pork)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '?????????????????????????????? ',
                conver : '?????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : r_p_kapao,string : '??????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.rice && state.beef)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '?????????????????????????????? ',
                conver : '???????????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : r_b_kapao ,string : '????????????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.mama && state.pork)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '?????????????????????????????? ',
                conver : '????????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : m_p_kapao ,string : '?????????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.mama && state.beef)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '?????????????????????????????? ',
                conver : '??????????????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : m_b_kapao ,string : '???????????????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.rice || state.mama)
        {setState(prevState => 
            ({...prevState,
                pic : aunt_warning,
                string : prevState.string + '?????????????????????????????? ',
                conver : '????????????????????????????????????????????????????????????????????????'}))}
        else{setState(prevState => 
            ({...prevState,
                pic : aunt_warning,
                string : prevState.string + '?????????????????????????????? ',
                conver : '??????????????????????????????????????????????????????????????????????????????'}))}
        
    }
    const Click_karee = () =>{
        if(state.rice && state.pork)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '???????????????????????????????????? ',
                conver : '???????????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : r_p_karee ,string : '????????????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.rice && state.beef)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '???????????????????????????????????? ',
                conver : '?????????????????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : r_b_karee ,string : '??????????????????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.mama && state.pork)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '???????????????????????????????????? ',
                conver : '??????????????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : m_p_karee ,string : '???????????????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.mama && state.beef)
        {setState(prevState => 
            ({...prevState,
                pic : aunt,
                kapao : true,
                karee : false, 
                string : prevState.string + '???????????????????????????????????? ',
                conver : '????????????????????????????????????????????????????????????????????????????????????????????????????'}))
        setPopup({pic : m_b_karee ,string : '?????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????'})
            }
        else if(state.rice || state.mama)
        {setState(prevState => 
            ({...prevState,
                pic : aunt_warning,
                string : prevState.string + '???????????????????????????????????? ',
                conver : '????????????????????????????????????????????????????????????????????????'}))}
        else{setState(prevState => 
            ({...prevState,
                pic : aunt_warning,
                string : prevState.string + '???????????????????????????????????? ',
                conver : '??????????????????????????????????????????????????????????????????????????????'}))}
        
    }
    const reset = () =>{
        setState({
            rice:false,
            mama:false,
            pork:false,
            beef:false,
            kapao:false,
            karee:false,
            string : '',
            conver : '???????????????????????????????????????????????????????',
            pic : aunt,
            isReset: true})
    }
    const toggle = () => {
        setIsOpen(!isOpen)
        setState({
            rice:false,
            mama:false,
            pork:false,
            beef:false,
            kapao:false,
            karee:false,
            string : '',
            conver : '???????????????????????????????????????????????????????',
            pic : aunt,
            isReset: true})
    }

    return (
        <div className = 'menu'>
            <Headmenu aunt_head = {pic_auntheader}/>
            <Step
            classname = 'step-1' 
            text_step = 'Step 1 : ???????????????????????????????????????????????????' 
            textfood1 = '????????????' 
            textfood2 = '???????????????' 
            pic1 = {pic_rice} 
            pic2 = {pic_mama}
            onClick1 = {Click_rice}
            onClick2 = {Click_mama}/>
            <Step
            classname = 'step-2'
            text_step = 'Step 2 : ?????????????????????????????????????????????'
            textfood1 = '????????????????????????'
            textfood2 = '???????????????????????????'
            pic1 = {pic_pork}
            pic2 = {pic_beef}
            onClick1 = {Click_pork}
            onClick2 = {Click_beef}/>
            <Step 
            classname = 'step-3'
            text_step = 'Step 3 : ???????????????????????????????????????'
            textfood1 = '??????????????????????????????'
            textfood2 = '????????????????????????????????????'
            pic1 = {pic_kapao}
            pic2 = {pic_karee}
            onClick1 = {Click_kapao}
            onClick2 = {Click_karee}/> 

            <Conversation ch_pic = {state.pic}/>

            {isOpen && <PopupConfirm toggle = {toggle} pic = {popup.pic} string = {popup.string}/>}
            
            <div className="answer-container">
                <Button text = '??????????????????' onClick = {confirm} classname = 'confirm'/>
                <Button text = '???????????????????????????????????????' onClick = {reset} classname = 'reset'/>
            </div>

        </div>
    )
}

export default Menu
