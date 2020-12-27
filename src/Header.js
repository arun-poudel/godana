import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Navbar from './Navbar';
import { useStateValue } from './StateProvider';
import logo from "./godanab.jpg";

function Header() {
    const [{ basket }] = useStateValue();
    console.table(basket);
    return (
        <>
            <nav className="header">
                <div className="header-hamburger-menu">
                    <Navbar/>
                </div>
                {/* http://pngimg.com/uploads/amazon/amazon_PNG25.png  */}
                <NavLink to='/'>
                <div className="header__logoOne">
                    <img className="header__logo" src={logo} />
                </div>
                </NavLink>

                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <NavLink to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne" >Hello arun </span>
                            <span className="header__optionLineTwo">LOGIN</span>
                        </div>
                    </NavLink>


                    <NavLink to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Returns</span>
                            <span className="header__optionLineTwo"> & Orders</span>
                        </div>
                    </NavLink>

                    <NavLink to="/" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">Your</span>
                            <span className="header__optionLineTwo">Prime</span>
                        </div>
                    </NavLink>

                    <NavLink to='/checkout' className="header__link">
                        <div className="header__optionBasket">
                            <ShoppingCartOutlinedIcon/>
                            <span className="header__optionLineTwo header__basketCount" >{basket?.length}</span>
                        </div>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header;
