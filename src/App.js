import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/DashBoard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';
import MyOrders from './Pages/DashBoard/MyOrders';
import AddReview from './Pages/DashBoard/AddReview';
import MyProfile from './Pages/DashBoard/MyProfile';
import AddProduct from './Pages/DashBoard/AddProduct';
import ManageProducts from './Pages/DashBoard/ManageProducts';
import ManageOrders from './Pages/DashBoard/ManageOrders';
import Users from './Pages/DashBoard/Users';
import Welcome from './Pages/Home/Welcome';
import Payment from './Pages/DashBoard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import About from './Pages/About/About';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/welcome' element={< Welcome/>}></Route>
        <Route path='/portfolio' element={<MyPortfolio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyProfile/>}></Route>
          <Route path='review' element={<AddReview/>}></Route>
          <Route path='orders' element={<MyOrders/>}></Route>
          <Route path='payment/:orderId' element={<Payment/>}></Route>
          <Route path='users' element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path='addProduct' element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts/></RequireAdmin>}></Route>
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders/></RequireAdmin>}></Route>
        </Route>
        
        <Route path='/purchase/:id' element={<RequireAuth>
          <Purchase/>
        </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
