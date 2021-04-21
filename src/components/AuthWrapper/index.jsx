import React from 'react'
import './styles.scss'
const AuthWrapper = ({headLine,children}) => {
    return (
        <div className='authwrapper'>
            <div className='wrap'>
                {headLine && <h2>{headLine}</h2>}
            </div> 
            <div className='children'>
                {children && children}
            </div>           
        </div>
    )
}

export default AuthWrapper;
