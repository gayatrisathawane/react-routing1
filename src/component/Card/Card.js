import { useState } from 'react';
import Button from './../Button/Button';
import './Card.css';
export default function Card({pname,price,img,size})
{
  const [count,setCount]=useState(0)

  function incr(){
    if(count<=19)
    {
      setCount(count+1)
    }
  }

  function dec(){
    if(count>=1)
    {
     setCount(count-1)
    }
  }

    return(
       <div className='card'>
         <img src={img} className='img'/>
        <p className="pname">{pname}</p>
        <h4 className="price">price :{price}     <span className="offer"> offer  50% </span></h4>
        <p className='size'>{size}</p><br/>
        <button className='selectq'>Select Quantity</button>    <button type='button' className='btncount' onClick={incr} > + </button>  <span className='count'>{count}</span>
       <button type='button' className='btncount' onClick={dec}>-</button><br/>
        <Button text="Buy now" />
        <Button text="Add to Cart"  />
       
       </div>
    );
}

export function Card1(){

  const [score,setScore]=useState(0)

  function incre()
  {
    setScore(score+2)
  }

  function dec()
  {
    setScore(score-2)
  }

  
  return(
   <div >
<button onClick={incre}>+</button>{score}<button onClick={dec}>-</button>

   </div>
  )
}