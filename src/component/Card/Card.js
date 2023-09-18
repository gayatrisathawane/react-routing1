import { useState } from 'react';
import Button from './../Button/Button';
import './Card.css';


export default function Card({pname,price,img,size})
{
  const [count,setCount]=useState(0)

  function incr(){
   
    setCount(count+1)

   
  }
  function dec(){
   
    setCount(count-1)

    if(count===0)
    {
     
    }

   
  }

    return(
       <div className='card'>
         <img src={img} className='img'/>
        <p className="pname">{pname}</p>
        <h4 className="price">price :{price}     <span className="offer"> offer  50% </span></h4>
        <p className='size'>{size}</p><br/>
      <button type='button' className='btncount' onClick={incr} > + </button>  <span className='count'>{count}</span>
        <button type='button' className='btncount' onClick={dec}>-</button><br/>
        <Button text="Buy now"/>
       
       </div>
    );
}