import React from 'react';
import Product from './Product.js';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="image-carousel">
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                        alt="carousel"
                        className="home__image"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="12"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                        rating={4}
                    />
                    <Product
                        id="123"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://m.media-amazon.com/images/I/71MGKo-M6FL._AC_UY218_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1237"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={2}
                    />
                    <Product
                        id="123355"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://m.media-amazon.com/images/I/618EWjDCSPL._MCnd_SEARCH281250_AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product
                        id="12341"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://m.media-amazon.com/images/I/71sj6lssmaL._AC_UL320_.jpg"
                        rating={1}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1233568"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/Kindle/_dog_us_Mobile_Hero_Lifestyle._CB1198675309_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1233896"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                        rating={5}
                    />
                    <Product
                        id="123456"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://m.media-amazon.com/images/I/618EWjDCSPL._MCnd_SEARCH281250_AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product
                        id="1233852"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://m.media-amazon.com/images/I/71sj6lssmaL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product
                        id="1233741"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://m.media-amazon.com/images/I/71sj6lssmaL._AC_UL320_.jpg"
                        rating={5}
                    />
                    <Product
                        id="123753"
                        title="the Lean start up How Constant Innovation Creates"
                        price={11}
                        image="https://m.media-amazon.com/images/I/71sj6lssmaL._AC_UL320_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </>
    )
}

export default Home;
