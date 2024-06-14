import React, { useState } from 'react';
import './style.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import Badge from '@mui/material/Badge';
import CategoryIcon from '@mui/icons-material/Category';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function Navbar() {
    const [userNavbar, setUserNavbar] = useState(true);
    const [navValue, setNavValue] = useState(0);
    const [dress, setDress] = useState(true)
    const handleUserNavbar = () => {
        setUserNavbar(prevState => !prevState);
    };
    const handleDress = () => {
        setDress(prevState => !prevState)
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
                                    <BottomNavigationAction onClick={handleUserNavbar} label="Profile" icon={<PersonIcon />} />
                                    <BottomNavigationAction onClick={handleDress} label="Dress" icon={<CategoryIcon />} />
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

                                {/* <div className='dressCategory' style={{ display: dress ? 'flex' : 'none'}}>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white" }} src="https://www.shutterstock.com/image-vector/sport-tshirt-icon-training-sign-260nw-1267243321.jpg" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>T-Shirt</p>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white" }} src="https://cdn4.vectorstock.com/i/1000x1000/30/48/shirt-icon-vector-22623048.jpg" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>Shirt</p>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white" }} src="https://static.vecteezy.com/system/resources/previews/010/347/283/non_2x/pants-boy-garment-line-icon-illustration-vector.jpg" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>Pant</p>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white" }} src="https://cdn-icons-png.flaticon.com/512/4795/4795378.png" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>Watch</p>
                                    </div> */}
                                    {/* <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white" }} src="/Image/shoe.png" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>Shoe</p>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="/Image/shorts.webp" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>shorts</p>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="/Image/chappal.webp" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>chappal</p>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%", background: "white" }} src="/Image/wallet.png" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>wallet</p>
                                    </div>
                                    <div style={{ cursor: "pointer" }}>
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src="/Image/innerwear.webp" alt="" />
                                        <p style={{ fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>Innerwear</p>
                                    </div> */}
                                {/* </div> */}

                            </nav>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;
