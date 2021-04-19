import Button from '../Forms/Buttons';
import './styles.scss';
import {signInWithGoogle,signInWithFacebook, auth} from './../../Firebase/Utils';
import { Component } from 'react';
import FormInput from '../Forms/formInput';

const initialState={
    email:'',
    password:''
}

class Signin extends Component{
    constructor(props){
        super(props);
        this.state={...initialState};
        this.handleChange=this.handleChange.bind(this);
    }
    handlesubmit = async e=>{
        e.preventDefault();
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({...initialState});
        }catch(err){
            console.log(err);
        }
    }
    handleChange(e){
        const{name,value} = e.target;
        this.setState({
            [name]:value
            }   
        )
    }


    render(){
        const{email,password}=this.state;
        return(
            <div className='signin'>
                <div className='wrap'>
                    <h2>sign in</h2>
                    <div className="formwrap">
                        <form onSubmit={this.handlesubmit}>
                            <FormInput
                            type='email'
                            name='email'
                            value={email}
                            placeholder='email'
                            onChange={this.handleChange}
                            />
                            <FormInput
                            type='password'
                            name='password'
                            value={password}
                            placeholder='password'
                            onChange={this.handleChange}
                            />
                            <button className='btn'> Login</button>
                            <div className="socialSignIn">
                                <div className='row'>
                                   <Button onClick={signInWithGoogle}>
                                       login with google
                                   </Button>
                                </div>
    
                                <div className='row'>
                                    <Button onClick={signInWithFacebook}>
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