import './App.css';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Components/MainContainer/Blog/Blogs';
import HomeContainer from './Components/HomeContainer';
import { Route,Routes } from 'react-router-dom';
import Blognavabar from './Components/Blognavabar';
import NewBlog from './Components/MainContainer/Blog/NewBlog';


function App() {
  return (
    <div className="App">
    <Blognavabar/>

    <Routes>
    <Route path='/' element={<HomeContainer/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signUp' element={<Signup/>}/>
<Route path='/addNewBlog' element={<NewBlog/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
