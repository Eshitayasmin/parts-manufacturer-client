import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Pages/Shared/Footer';
import Dashboard from './Pages/DashBoard/Dashboard';

function App() {
  return (
    <div className="App">
         <Navbar></Navbar>
         <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/dashboard' element={<Dashboard/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
           <Route path='/register' element={<Register/>}></Route>
         </Routes>
         <Footer></Footer>
         <ToastContainer />
    </div>
  );
}

export default App;
