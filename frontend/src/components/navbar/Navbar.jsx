import React, { useState } from 'react';
import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Badge from '@mui/material/Badge';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function Navbar() {
    const [userNavbar, setUserNavbar] = useState(true);
    const [navValue, setNavValue] = useState(0);
    const handleUserNavbar = () => {
        setUserNavbar(prevState => !prevState);
    };
console.log(navValue);
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
                                <div className='navbar_user'>
                                    <BottomNavigation
                                        showLabels
                                        value={navValue}
                                        onChange={(event, newValue) => {
                                            setNavValue(newValue);
                                        }}
                                    >
                                        <BottomNavigationAction label="Favorites" icon={<FavoriteOutlinedIcon />} />
                                        <BottomNavigationAction label="Work" icon={<WorkIcon />} />
                                        <BottomNavigationAction
                                            label="Cart"
                                            icon={<Badge badgeContent={4} color="primary"><ShoppingCartIcon /></Badge>}
                                        />
                                        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                                    </BottomNavigation>
                                </div>

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
