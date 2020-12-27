import React, {useEffect,useState} from 'react';
import './Checkout.css';
import { useStateValue } from "./StateProvider";
import CheckoutProuduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [{ basket }] = useStateValue();
    // const 
    // console.table(basket);
    console.log("arun");

    useEffect(() => {
        localStorage.setItem("arun","poudel")
    }, [])



    return (
        <>
            <div className="checkout">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2020/Q3_Fall/deals/Hero_desktop_05.jpg" alt="" />
                
                {basket?.length ===0 ? (
                    <div>
                        <h2>Your Shopping Baket is empty</h2>
                        <p>You have no items in your basket. To buy one or add item to basket click the add to basket button</p>
                        <h1><Link to="/">CONTINUE SHOPPING</Link></h1>
                    </div>
                ) : (
                    <div>
                    <div className="total">
                        <Subtotal/>
                    </div>
                    
                        <h2 className ="Checkout_title" >Your Shopping basket has {basket.length} items.</h2> 
                        {/* List out all the checkout  product  */}
                        {basket.map(item => (
                        <CheckoutProuduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                        ))
                        }
                    </div>
                )}
        </div>
    </>
    );
}
export default Checkout;
