import './App.css';
import Main from './components/main';
import Header from './components/header';
import Aside from './components/aside/aside';
import "react-router-dom"
import { Route, BrowserRouter } from 'react-router-dom';
import MessageMain from './components/main/message/message.main';
import state from './redux/state';
function App(props) {

  return ( <BrowserRouter>
  <div className='app'>
          <Header />
          <Aside />
          <Main state={props.state}  />
          <Route path ='/message' render = { () => <state messagesPage ={props.state.messagesPage} /> } /> 
          {/* <Route path='/message' render= { () => <MessageMain dialogs ={props.dialogs} messages ={props.messages}/> } /> */}
  </div>
  </BrowserRouter>
  );
}

export default App;