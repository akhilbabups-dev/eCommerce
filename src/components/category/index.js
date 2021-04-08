import React from 'react';
import smartphoneimg from './../../assets/smartphones.jpg';
import earphnoneimg from './../../assets/earphones.jpg';
import './styles.scss';
const productCategory =props=>{
    return(
        <div className="category">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${smartphoneimg})`}}>
                    <a> smartphones</a>
                </div>

                <div className="item" style={{backgroundImage: `url(${earphnoneimg})`}}>
                    <a> earphones</a>
                </div>
                
            </div>
            
        </div>
    )
}
export default productCategory;