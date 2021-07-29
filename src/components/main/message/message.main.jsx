import Item from '../../item/item.jsx'

function MessageMain(props){
    return (
        <div>
          < Item name='Канеки' message='Теперь моя очередь' url='https://www.nicepng.com/png/full/131-1315000_kaneki-ken-ken-kaneki-png.png'  />
          < Item name='Цукияма'message='Вкусный запах Канеки'url='https://i.pinimg.com/474x/a5/3e/20/a53e2097a7d56e9454fedd5a7a3af7a3.jpg' />
          < Item name ='Судзуя Джузо' message='Сбежав от одного противника дважды, тебе его уже не одолеть.' url='https://i.pinimg.com/originals/84/a5/b2/84a5b29a3003c968e2cb2f32712f12f5.jpg'/>
        </div>


    )
}
export default MessageMain;