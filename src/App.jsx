import './App.css';
import Addmovie from './components/Addmovie';
import Description from './components/Description';
import Home from './components/Home';
import Profile from './components/Profile';
import Search from './components/Search';
import Sidebar from './components/Sidebar';
import {BrowserRouter , Routes , Route} from 'react-router-dom' 
import Update from './components/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Sidebar/>
        <Routes>
          <Route path='/'  element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/add' element={<Addmovie/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/description/:id' element={<Description/>}/>
          
          <Route path='/update/:id' 
          element={<Update/>}/>
          
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
