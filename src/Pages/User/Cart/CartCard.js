import React from 'react';
import './Cart.css';

const CartCard = () => {
  return (
    <div>
        <div className='cartCard'>
            <div className='productImage'>

            </div>
            <div className='productDescription'>
            <h3>Product Name {}</h3>
            <p>Price ₹ {}</p>
            <div className='cartCard-buttons'>
                <button style={{height:'30px',borderRadius:'3px'}}>Qty: 
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                </button>
                <section className='sectionButtons'>
                <button>
                    Delete
                </button>
                <button>
                    Save for later
                </button>
                <button>
                    See more like this
                </button>
                <button>
                    Share
                </button>
                </section>
            </div>
            </div>
        </div>
        <br/>
        <hr/>

    </div>
  )
}

export default CartCard
