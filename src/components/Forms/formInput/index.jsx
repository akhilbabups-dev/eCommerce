import React from 'react';
import './styles.scss';
const formInput=({handleChange,label,...otherProps})=>{
    return(
        <div className='formRow'>
            {label &&(
                <label>{label}</label>
            )}
            <input className="formInput" onChange={handleChange} {...otherProps}/>
        </div>
    )
}
export default formInput;