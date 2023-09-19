
import './ProductCard.css';
const ProductCard =({uname,age,location,bgcolor,emoji}) =>
{
    return(
        <div className="productcard1" style={{backgroundColor:bgcolor}}>
           
          <h1> {uname} <span className='emoji'>{emoji}</span></h1>
           <h1>{age}</h1>
           <h1>{location}</h1>
        </div>
    )
}
export default ProductCard;