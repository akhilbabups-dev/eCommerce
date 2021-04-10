import React from 'react';
import mobilegadgets from './../../assets/mobilegadget.jpg';
import clothingimg from './../../assets/clothing.jpg';
import './styles.scss';
const productCategory =props=>{
    return(
        <div className="category">
            <div className="wrap">
                <div className="item" style={{backgroundImage: `url(${mobilegadgets})`}}>
                    <a className="texts"> smartphones and gadgets</a>
                </div>

                <div className="item" style={{backgroundImage: `url(${clothingimg})`}}>
                    <a className="texts"> fashion</a>
                </div>
                
                
            </div>
            
        </div>
    )
}
export default productCategory;