import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './view/Homepage/Homepage';
import Contact from './view/Contact/Contact';
import Product from './view/Product/Product';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product",
    element: <Product/>,
  },

  {
    path: "/contact",
    element: <Contact/>,
  },
]

);


// function App()
// {
  
    
//   const path =window.location.pathname;
//     switch(path){
//       case "/":
//          return <Home/>
//       case "/about":
//          return <About/>
//       case "/contact":
//           return <Contact/>
//       default :
//          return <h2>Invalid Path</h2>

//     }
  
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <RouterProvider router={router} />
 
  </>

);


 


