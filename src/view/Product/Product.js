
import Card, {Card1} from "../../component/Card/Card";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import ProductCard from "../../component/ProductCard/ProductCard";
import imglaptop from "./laptop.jpg";
import imglaptop1 from "./laptop1.jpg";
import imgtab from "./tab.jpg";
import { useState } from "react";


export default function About()
{

    const[products,setProduct]=useState([

        {
            uname:"Gayatri",
            age:21,
            location:"warathi",
            bgcolor:'red',
            emoji:'❤️'
           
        },
        {
            uname:"Nilam",
            age:21,
            location:"bhandara",
            bgcolor:'orange',
            emoji:'😍'
        },
        
        {
            uname:"Aakansha",
            age:22,
            location:"Nagpur",
            bgcolor:'violet',
            emoji:'😘'
        },
        {
            uname:"Nilu",
            age:20,
            location:"warathi",
            bgcolor:'yellow',
            emoji:'😊'
        },
        {
            uname:"Shewta",
            age:21,
            location:"ahmdanagar",
            bgcolor:'green',
            emoji:'😄'
        }
        


        

    ])
    return(
        <>
        <Navbar/>
       <div className="productcard">
        <Card pname='Lenovo tab  m10 FHD' price="14000 RS"  img={imgtab}/>
        <Card  pname='Asus Laptop' price="34000 RS"  img={imglaptop}/>

         <Card  pname='Apple Laptop' price="40000 RS"  img={imglaptop1}/>
         <Card  pname='Acer Laptop' price="42000 RS"  img={imglaptop}/>
         </div>

      

         {/* <ProductCard productname="html" /> */}

         <div className="productcard3">
       {
         products.map ((productInfo) => {
            let {uname,age,location,bgcolor,img,emoji}=productInfo;
            return <ProductCard uname={uname}  age={age} location={location} bgcolor={bgcolor} img={img} emoji={emoji} />

         } )
        }

        </div>

       <Footer/>
        </>

    );
}