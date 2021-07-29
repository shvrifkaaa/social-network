import { NavLink } from 'react-router-dom'
import s from './news.module.css'



function News(props){
     return(
     <div className= 'news'>
        <NavLink to='/news'> news </NavLink>
     </div>
    )
}
export default News