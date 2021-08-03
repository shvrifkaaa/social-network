import { NavLink } from 'react-router-dom'
import Item from '../../item/item.jsx'
import s from './message.module.css'

let dialogs =[
  {id: 1, name : 'Sharif'},
  {id: 2, name : 'Erna'},
  {id: 3, name : 'Aktan'},
  {id: 4, name : 'Eldar'},
  {id: 5, name : 'Filipp'},
  {id: 6, name : 'Emir'},
  ]
let messages =[
  {id: 1, message : 'Hi'},
  {id: 2, message : 'HIHI'},
  {id: 3, message : 'IHIHI'},
  {id: 4, message : 'ABOBA'},
  {id: 5, message : 'AMOGUS'},
  {id: 6, message : 'AMOBUS'},
]

let MessageItem =(props)=>{
  let path = "/dialogs/" + props.id;
  return(
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path}> {props.name} </NavLink>
    </div>
)}

let Message = (props) =>{
  return(
    <div className={s.messages}>{props.messages}</div>
)}

let dialogsElement= dialogs
.map( d => <MessageItem name={d.name} id ={d.id} />
);

let messagesElement = messages
.map ( m =><Message messages={m.message}/>
)

function MessageMain(props){
    return (
        <div className={s.dialogs}>
          <div className={s.dialogItems}>
            {dialogsElement}
          </div>
          <div className={s.messages}>
            {messagesElement}
          </div>
        </div>

)}




export default MessageMain;



/* < Item name='Канеки' message='Теперь моя очередь'
          url='https://www.nicepng.com/png/full/131-1315000_kaneki-ken-ken-kaneki-png.png' />
        < Item name='Цукияма' message='Вкусный запах Канеки'
          url='https://i.pinimg.com/474x/a5/3e/20/a53e2097a7d56e9454fedd5a7a3af7a3.jpg' />
        < Item name='Судзуя Джузо' message='Сбежав от одного противника дважды, тебе его уже не одолеть.'
          url='https://i.pinimg.com/originals/84/a5/b2/84a5b29a3003c968e2cb2f32712f12f5.jpg' /> */
          
          
          /* <div className={s.message}>HI</div>
          iv className={s.message}>HIHI</div>
        <div className={s.message}>IHIHI</div> */


        /* <MessageItem name="Aktan" id='3' />
            <MessageItem name="Eldar" id='4' />
            <MessageItem name="Filipp" id='5' />
            <MessageItem name="Emir" id='6' /> */