import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className="product">
           < div className="product__info">
               <p>The Lean startup</p>
               <p className='product__price'>
                    <small>$</small>
                    <strong>19.89</strong>
                </p>
                <div className='product__rating'>
                    <p>🌟</p>
                </div> 
           </div>

           <img 
             src="https://www.biz-pi.com/wp-content/uploads/2016/08/the_lean_startup_eric_ries.jpg" 
             alt=""
           />

           <button>Add to Basket</button>
        </div>
    )
}

export default Product
