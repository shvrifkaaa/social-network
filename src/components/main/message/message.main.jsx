import s from './message.module.css'
import Message from './messageItem/message.jsx'
import DialogItem from './dialogItem/dialogItem'
let MessageMain = (props) =>{

  let dialogsElement = props.state.dialogs.map ( d =><DialogItem name ={d.name} id ={d.id}/>  )
  let messagesElement = props.state.messages.map ( m =><Message messages={m.message}/>);
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

/*
<dialogItem name={d.name} id ={d.id} />



*/












/* < Item name='Канеки' message='Теперь моя очередь'
          url='https://www.nicepng.com/png/full/131-1315000_kaneki-ken-ken-kaneki-png.png' />
        < Item name='Цукияма' message='Вкусный запах Канеки'
          url='https://i.pinimg.com/474x/a5/3e/20/a53e2097a7d56e9454fedd5a7a3af7a3.jpg' />
        < Item name='Судзуя Джузо' message='Сбежав от одного противника дважды, тебе его уже не одолеть.'
          url='https://i.pinimg.com/originals/84/a5/b2/84a5b29a3003c968e2cb2f32712f12f5.jpg' /> */
          
          
          /* <div className={s.message}>HI</div>
          iv className={s.message}>HIHI</div>
        <div className={s.message}>IHIHI</div> */


        /* <DialogItem name="Aktan" id='3' />
            <DialogItem name="Eldar" id='4' />
            <DialogItem name="Filipp" id='5' />
            <DialogItem name="Emir" id='6' /> */