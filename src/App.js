import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blognavabar from './Components/Blognavabar';
import Banner from './Components/Banner';
import Blogs from './Components/Blogs';
function App() {
  return (
    <div className="App">
    <Blognavabar/><Banner/>
    <Blogs/>
      <Login/>
    <Signup/>
    </div>
  );
}

export default App;
