import { NavLink } from 'react-router-dom'
import s from './news.module.css'



function News(props){
     return(
     <div className= {s.news}>
        <NavLink to='/news'> news </NavLink>
     </div>
    )
}
export default News