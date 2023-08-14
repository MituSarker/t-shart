import React from 'react';
import'./Cart.css'
const Cart = ({cart,handleRemoveItem}) => {

    let message;
    if(cart.length === 0){
        message = <p>please buy one item</p>
    }
    else if (cart.length===1){
        message=<p>amar jonno akta</p>
    }
    else{
        message=<p>thank u</p>
    }
  

    return (
        <div>
            <h2 className={cart.length===3 ? `orange`:'purple'}>Order summary</h2>
            
            {
                cart.map(tshirt =><p
                key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={()=>handleRemoveItem(tshirt)}>x</button>
                </p>)
            }
            {
                message
            }
            {cart.length===3?<p>gift dao tin jonke</p> :<p>kinoooooooooo</p>}

                {cart.length===2 && <h3>double</h3>}
        </div>
    );
};

export default Cart;