import { NavLink } from 'react-router-dom'
import s from './../message.module.css'
import React from 'react';

let DialogItem =(props)=>{
    let path = "/dialogs/" + props.id;

    return(
      <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}> {props.name} </NavLink>
      </div>
      

)}
export default DialogItem