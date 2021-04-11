import React from 'react';
import './styles.scss';
import logo from './../../assets/rklogo.jpg';
import {Link} from 'react-router-dom';
const Header= props=>{
    return(
        <div className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to='/'>
                        <img className="image" src={logo} alt="logo"></img>
                    </Link>
                </div>
            </div>
            <div className="register">
                <ul>
                    <li>
                        <Link to="/registration">
                           Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin">
                           sign in
                        </Link>
                    </li>
                </ul>
                
            </div>

        </div>

    )
}
export default Header;