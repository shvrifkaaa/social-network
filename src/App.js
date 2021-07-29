import './App.css';
import Main from './components/main';
import Header from './components/header';
import Aside from './components/aside/aside';
import "react-router-dom"
import { Route, BrowserRouter } from 'react-router-dom';
function App(props) {
  return ( <BrowserRouter>
  <div className='app'>

          <Header />
          <Aside />
          <Main state={props.state}  />
  </div>
  </BrowserRouter>
  );
}

export default App;
