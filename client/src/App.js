
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddUser from './Components/AddUser';
import UserList from './Components/UserList';
import UpdateUser from './Components/UpdateUser';
import { ToastContainer } from 'react-toastify';
import NavBar from './Components/Reusable/NavBar';


function App() {
  return (
    <div className="App">
    <ToastContainer />
      <Router>
      <NavBar />
        <div className='header'>
        {/**
        
        <Link to={'/'} ><button className='btn btn-primary p-2 m-2'>Home</button></Link>
        <Link to={'/user'}>
          <button className="btn btn-primary btn btn-primary p-2 m-2">
            User
          </button>
        </Link>
        <Link to={'/user/add'}>
          <button className='btn btn-primary btn btn-primary p-2 m-2'>
            Add User
          </button>
        </Link>
        <Link to={'/user/edit/:parameter'}>
          <button className='btn btn-primary btn btn-primary p-2 m-2'>
            Edit
          </button>
        </Link>
          */}
        </div>
      
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path='/user' element={<UserList />} />
          <Route exact path="/user/add" element={<AddUser />} />
          <Route exact path="/user/edit/:markbello" element={<UpdateUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
