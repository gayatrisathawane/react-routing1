import Button from "./../../component/Button/Button";
import Footer from "./../../component/Footer/Footer"
import Navbar from "../../component/Navbar/Navbar";

export default function Contact()
{
    return(
        <>
      <Navbar/>
     <label>Name:</label> <input type="text"/>
     <label>Contact:</label> <input type="text"/>
     <label>Addres:</label> <input type="text"/>
     <Button text="Send Message" />
     <h1 className="bg-green ">Contact page</h1>
     <Footer/>
      </>
    );
}