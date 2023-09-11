
import Card from "../../component/Card/Card";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import imglaptop from "./laptop.jpg";
import imglaptop1 from "./laptop1.jpg";
import imgtab from "./tab.jpg"

export default function About()
{
    return(
        <>
        <Navbar/>
       
        <Card pname='Lenovo tab  m10 FHD' price="14000 RS"  img={imgtab}/>
        <Card  pname='Asus Laptop' price="34000 RS"  img={imglaptop}/>

         <Card  pname='Apple Laptop' price="40000 RS"  img={imglaptop1}/>
         <Card  pname='Acer Laptop' price="42000 RS"  img={imglaptop}/>
<Footer/>
        </>

    );
}