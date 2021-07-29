import { Route } from 'react-router'
import s from './Main.module.css'
import MessageMain from './main/message/message.main'
import NewsMain from './main/news/News.main'


function Main(props){
    return (
        <div className={s.main}>
          <Route path='/news' render={()=><NewsMain state={props.state} />}>
          </Route>
          <Route path='/message' component={MessageMain}>
          </Route>
        </div>
    )
}
export default Main