import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Authentication/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
