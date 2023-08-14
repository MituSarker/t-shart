import React from 'react';
import './Shirt.css'
const Shirt = ({tshirt,handleAddToCart}) => {
    const {picture,name,price}=tshirt;
    return (
        <div className='t-shirt'>
       <img src={picture} alt=''></img>
       <h2>{name}</h2>
       <h4>price:{price}</h4>
          <button onClick={()=>handleAddToCart(tshirt)}>buy me</button> 
        </div>
    );
};

export default Shirt;