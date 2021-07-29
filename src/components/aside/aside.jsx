import s from './aside.module.css'
import News from './news/news'
import Message from './Message/message'
import Settings from './settings/settings'




function Aside(props){
    return (
        <aside>
            <News/>
            <Message/>
            <Settings/>
        </aside>
    )
}
export default Aside