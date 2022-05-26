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
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import ManageUsers from './Pages/Dashboard/ManageUsers';
import RequireAdmin from './Pages/Authentication/RequireAdmin';
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Payment from './Pages/Dashboard/Payment';

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
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin>
            <ManageUsers></ManageUsers>
          </RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin>
            <AddProduct></AddProduct>
          </RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin>
            <ManageProducts></ManageProducts>
          </RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin>
            <ManageOrders></ManageOrders>
          </RequireAdmin>}></Route>
        </Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
