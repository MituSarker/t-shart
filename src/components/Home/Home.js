import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Shirt from '../Shirt/Shirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const tshirts =useLoaderData();

    const [cart,setCart]=useState([]);

    const handleAddToCart=tshirt=>{
        const exists =cart.find(ts => ts._id === tshirt._id);
        if(exists){
            alert('alredy added')
        }
        else{
            const newCart =[...cart,tshirt];
            setCart(newCart); 
        }
    }
    const handleRemoveItem = tshirt=>{
        const remaining = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>

       <div className="t-shirt-container">
       {
            tshirts.map(tshirt =><Shirt 
                 key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart={handleAddToCart}
           > </Shirt>
           )
        }
       </div>
       <div className="cart-container">
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
       </div>
        </div>
    );
};

export default Home;