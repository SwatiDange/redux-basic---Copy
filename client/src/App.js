import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/editUser/:id' element={<EditUser/>}/>


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
