import './Navbar.css';
import {Link} from 'react-router-dom';
export default function Navbar()
{
    return(
       <div className='navbar'>
       <Link to="/" className='item'>Home</Link>
      <Link to="/product" className='item'>Products</Link>
      <Link to="/contact" className='item'>Contact Us</Link>
      <Link to="/contact" className='item'>Login</Link>
      <Link to="/contact" className='item'>Sign up</Link>
      
        
       </div>
    );
}