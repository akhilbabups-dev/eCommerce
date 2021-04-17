import Button from '../Forms/Buttons';
import './styles.scss';
import {signInWithGoogle} from './../../Firebase/Utils';
import { Component } from 'react';


class Signin extends Component{
    handlesubmit = async e=>{
        e.preventDefault();
    }


    render(){
        return(
            <div className='signin'>
                <div className='wrap'>
                    <h2>sign in</h2>
                    <div className="formwrap">
                        <form onSubmit={this.handlesubmit}>
                            <div className="socialSignIn">
                                <div className='row'>
                                   <Button onClick={signInWithGoogle}>
                                       login with google
                                   </Button>
                                </div>
    
                                <div className='row'>
                                    <Button>
                                        login with facebook
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Signin;