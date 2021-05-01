import React from 'react';
import './styles.scss';
import logo from './../../assets/rklogo.jpg';
import {Link} from 'react-router-dom';
import {auth} from './../../Firebase/Utils';

import{connect} from 'react-redux';

const Header= props=>{
    const {currentUser}=props;
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
                {!currentUser &&(
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Log In
                            </Link>
                        </li>
                    </ul>
                )}
                {currentUser &&(
                    <ul>
                        <span onClick={()=>auth.signOut()}>
                            Logout
                        </span>
                    </ul>
                )}
                
                
            </div>

        </div>

    )
}
Header.defaultProps={
    currentUser:null
}

const mapStateToProps=({user})=>{
    currentUser: user.currentUser;
}

export default connect(mapStateToProps,null) (Header);