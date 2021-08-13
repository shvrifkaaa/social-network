import React from 'react';
import s from './../message.module.css'

let Message = (props) =>{
  return(
    <div className={s.messages}>{props.messages}</div>
)}
export default Message;