import Button from './../Button/Button';
import './Card.css';

export default function Card({pname,price,img,size})
{
    return(
       <div className='card'>
         <img src={img} className='img'/>
        <p className="pname">{pname}</p>
        <h4 className="price">price :{price}     <span className="offer"> offer  50% </span></h4>
        <p className='size'>{size}</p>
        <Button text="Buy now"/>
       
       </div>
    );
}