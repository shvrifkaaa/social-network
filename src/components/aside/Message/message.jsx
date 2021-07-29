import s from './message.module.css'
import Item from './../../item/item'
import { NavLink } from 'react-router-dom'



function Message (props){
    return(
        <div className= 'message'>
        <NavLink to='/message'> message </NavLink>
     </div>
    )
}
export default Message