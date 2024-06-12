import React, { useState } from 'react';
import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Badge from '@mui/material/Badge';

function Navbar() {
    const [userNavbar, setUserNavbar] = useState(true);
    const handleUserNavbar = () => {
        setUserNavbar(prevState => !prevState);
    };

    return (
        <>
            <div className="main_nav_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-right nav_container">
                            <div className="logo_container">
                                <a href="#">E-<span>shop</span></a>
                            </div>
                            <nav className="navbar">
                                <div className="searchinputdiv">
                                    <input className="searchinput" type="text" placeholder="Search...." />
                                    <a href="#"><SearchIcon className="search-icon" style={{ paddingTop: "6px" }} /></a>
                                </div>
                                <ul className="navbar_user">
                                    <li><a href="#"><FavoriteOutlinedIcon className="search-icon" /></a></li>
                                    <li><a href="#"><WorkIcon className="search-icon" /></a></li>
                                    <li className="checkout">
                                        <a href="#">
                                            <Badge badgeContent={4} color="primary">
                                                <ShoppingCartIcon className="search-icon" />
                                            </Badge>
                                        </a>
                                    </li>
                                    <li><a href="#"><PersonIcon className="search-icon" /></a></li>
                                </ul>
                                <div className="navbar_user_side">
                                    <a onClick={handleUserNavbar} href="#"><PersonIcon className="search-icon" /></a>
                                    <ul className="navbar_user_profile" style={{ display: userNavbar ? 'block' : 'none' }}>
                                        <li><PersonIcon className="search-icon" /></li>
                                        <li><FavoriteOutlinedIcon className="search-icon" /></li>
                                        <li><WorkIcon className="search-icon" /></li>
                                        <li className="checkout">
                                            <Badge badgeContent={4} color="primary">
                                                <ShoppingCartIcon className="search-icon" />
                                            </Badge>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
