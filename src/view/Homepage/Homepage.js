import Navbar from "../../component/Navbar/Navbar";
import bg  from  './bg2.jpg';
import './Homepage.css'
import Card from "../../component/Card/Card";
import Footer from "../../component/Footer/Footer";
import tshirt1 from '../../component/Card/t-shirt1.jpg';
import tshirt2 from '../../component/Card/t-shirt2.jpg';
import tshirt3 from '../../component/Card/t-shirt3.jpg';
import tshirt4 from '../../component/Card/t-shirt4.jpg';

export default function Home()
{
    return(
        <>
       
        <Navbar/>
        <div ><img src={bg} className="bg"/></div>
        <p className="heading">Fancy t-shirt collection here......</p>
        <Card pname='Fancy t-shirt' price="400 RS"  img={tshirt1} size=' x xl l xxl'/>
        <Card pname='Fancy t-shirt' price="300 RS"  img={tshirt2} size=' x xl l xxl'/>
        <Card pname='Fancy t-shirt' price="450 RS"   img={tshirt3} size=' x xl l xxl'/>
        <Card pname='Fancy t-shirt' price="564 RS"  img={tshirt4} size=' x xl l xxl'/>
     
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
        <Footer/>


        </>
    );
}