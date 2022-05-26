import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {
  const [user] = useAuthState(auth);

  console.log(user);
  const handleSignOut = () =>{
    signOut(auth);
  }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/dashboard'>DashBoard</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/about'>About</Link></li>
        {
          user 
          ?   
        <button onClick={handleSignOut} class="btn btn-ghost">Sign Out</button>
          :
          <li><Link to='/login'>Login</Link></li>
        }
    
    </>
    return (
        <div className="navbar lg:flex lg:justify-around bg-amber-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 text-xl shadow bg-base-100 rounded-box w-52">
            {menuItems}
            </ul>
          </div>
          <a className="text-3xl font-serif text-fuchsia-600 font-lg">AR Parts Manufacturer</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
         {menuItems}
          </ul>
        </div>
        
      </div>
    );
};

export default Navbar;



// import { signOut } from 'firebase/auth';
// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link } from 'react-router-dom';
// import auth from '../../firebase.init';

// const Navbar = () => {
//     const [user] = useAuthState(auth);

//     const handleSignOut = () => {
//         signOut(auth);
//         localStorage.removeItem('accessToken');
//     }

//     const menuItems = <>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/appointment'>Appointment</Link></li>
//         <li><Link to='/reviews'>Reviews</Link></li>
//         <li><Link to='/contact'>Contact Us</Link></li>
//         <li><Link to='/about'>About</Link></li>
//         {
//             user &&
//             <li><Link to='/dashboard'>Dashboard</Link></li>
//         }
//         <li>{
//             user
//                 ?
//                 <button onClick={handleSignOut} className="btn btn-ghost">Sign Out</button>
//                 :
//                 <Link to='/login'>Login</Link>
//         }</li>
//     </>
//     return (
//         <div className="navbar bg-base-100">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <label tabIndex="0" className="btn btn-ghost lg:hidden">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </label>
//                     <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                         {menuItems}
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal p-0">
//                     {menuItems}
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <label tabIndex="1" htmlFor="dashboard-sidebar"  className="btn btn-ghost lg:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                 </label>
                
//             </div>
//         </div>
//     );
// };

// export default Navbar;