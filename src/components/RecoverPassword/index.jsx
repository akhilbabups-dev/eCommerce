import React, { Component } from 'react';
import './styles.scss';
import AuthWrapper from './../AuthWrapper';
import FormInput from './../Forms/formInput';
import {auth} from './../../Firebase/Utils';
import{withRouter, WithRouter} from 'react-router-dom';
const initialState={
    email:'',errors:[]
}
 class RecoverPassword extends Component {
    constructor(props){
        super(props);
        this.state={...initialState}; 
        this.handleChange=this.handleChange.bind(this)  
    }
    handleChange(e){
        const{name,value}=e.target;
        this.setState({
            [name]:value
        })
    }
    handleSubmit= async (e)=>{
        e.preventDefault();
        const {email}=this.state;
        const config={
            url:'http://localhost:3000/login'
        }
        try{
            await auth.sendPasswordResetEmail(email,config)
            .then(()=>{
                this.props.history.push('./login')
            })
            .catch(()=>{
                const err=['not a user email'];
                this.setState({
                    errors:err
                })
            })
        }catch(err){
            console.log(err)
        }
    }
    render() {
        const configAuthWrapper={
            headLine:'Forgot password Recovery'
        }
        const {email,errors}=this.state;

        return (
            <AuthWrapper {...configAuthWrapper}>
                <div className='formwrap'>
                    {errors.length>0 &&(
                        <ul>
                            {errors.map((e,index)=>{
                                return(
                                    <li key={index}>{e}</li>
                                )
                            })}
                        </ul>
                    )}
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            type='email'
                            name='email'
                            value={email}
                            placeholder='enter email'
                            onChange={this.handleChange}
                        />
                        <button className='btn' type="submit"> Recover password</button>
                    </form>
                </div>

            </AuthWrapper>
        )
    }
}
export default withRouter(RecoverPassword);
