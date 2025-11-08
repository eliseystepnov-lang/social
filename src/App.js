import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/Profile';
import Aside from './components/aside/Aside';
import Chat from './components/chat/Chat';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Aside></Aside>
        <div className='contentWrapper'>
          <Route path="/profile" component={Profile}></Route>
          <Route path="/messages" component={Chat}></Route>
        </div>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
