import React, { useState } from 'react';
import './CheckoutProduct.css';
import { Checkbox } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

const CheckoutProduct = ({ id, title, image, price, rating }) => {

    const [quantityValue, setQuantityValue] = useState(rating);
    const [{ basket }, dispatch] = useStateValue();

    console.log(id, title, image, price, rating);

    const removeFromBasket = () => {
        // remove item from basket...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };

    const addItem = () => {
        if (quantityValue >= 5) {
            setQuantityValue(5);


        } else {
            setQuantityValue(quantityValue + 1)
        }
    }
    const removeItem = () => {
        if (quantityValue <= 1) {
            setQuantityValue(1);
        } else {
            setQuantityValue(quantityValue - 1)
        }
    }

    return (
        <>
            <div className="checkoutProduct">
                <div className="checkoutItem">
                    <div className="cart-item-left">
                        <span className="checkbox">
                            <Checkbox className="checkbox" color="primary" />
                        </span>
                        <div className="img-wrap">
                            <img className="img-wrap" src={image} alt="" />
                        </div>
                        <div className="content">
                            <p>{title}</p>
                            <div className="product__rating">
                                {
                                    Array(rating)
                                        .fill()
                                        .map((_) => (
                                            <p>⭐</p>
                                        ))}
                            </div>
                        </div>
                    </div>
                    <div className="cart-item-middle">
                        <p className="price">Rs. {price} </p>
                        <div className="operations">
                            <span className="wishlist">
                                <label htmlFor="icon-button-file">
                                    <IconButton color="secondary" aria-label="upload picture" component="span">
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </label>
                            </span>
                            <span className="remove" onClick={removeFromBasket} >
                                <label htmlFor="icon-button-file"  >
                                    <IconButton color="secondary" aria-label="upload picture" component="span">
                                        <DeleteOutlineTwoToneIcon />
                                    </IconButton>
                                </label>
                            </span>
                        </div>
                    </div>
                    <div className="cart-item-end">
                        <div className="inner-quantity">
                            <div className="minus-quantity" onClick={removeItem}>
                                <RemoveIcon />
                            </div>
                            <div className="number-quantity">
                                <input value={quantityValue} onChange={e => setQuantityValue(e.target.value)} id="quantity-num" type="text" autoComplete="on" />
                            </div>
                            <div className="plus-quantity" onClick={addItem}>
                                <AddIcon />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutProduct;
