import React from 'react'
import './style.css'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';


function Navbar() {
    return (
        <>
            <div class="main_nav_container">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-right nav_container">
                            <div class="logo_container">
                                <a href="#">E-<span>shop</span></a>
                            </div>
                            <nav class="navbar">
                                <ul class="navbar_menu">
                                    <li><a href="#">home</a></li>
                                    <li><a href="#">shop</a></li>
                                    <li><a href="#">promotion</a></li>
                                    <li><a href="#">pages</a></li>
                                    <li><a href="#">blog</a></li>
                                    <li><a href="contact.html">contact</a></li>
                                </ul>
                                <ul class="navbar_user">
                                    <li><a href="#"><SearchIcon className="search-icon" /></a></li>
                                    <li><a href="#"><PersonIcon className="search-icon" /></a></li>
                                    <li class="checkout">
                                        <a href="#">
                                            <Badge badgeContent={4} color="primary">
                                                <ShoppingCartIcon className="search-icon" />
                                            </Badge>
                                        </a>
                                    </li>
                                </ul>
                                {/* <div class="hamburger_container">
								<i class="fa fa-bars" aria-hidden="true"></i>
							</div> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar