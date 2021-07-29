import s from './settings.module.css'
import { NavLink } from 'react-router-dom'

function Settings (props){
    return(
        <div className= 'settings'>
        <NavLink to='/settings'> settings </NavLink>
     </div>
    )
}
export default Settings