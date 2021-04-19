import React, { Component } from 'react'
import './styles.scss';
import FormInput from './../Forms/formInput';
import {auth,firestore, handleUserProfile} from './../../Firebase/Utils';
const initialState={
    displayName:'',
    email:'',
    password:'',
    rePassword:'',
    passwordError:[],
    emptyName:[],
    invlidMail:[]
}

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            ...initialState
        }
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        const {name,value}= e.target;
        this.setState({
            [name]:value
        });
    }
    handleSubmit = async event=>{
        event.preventDefault();
        const{displayName,email,password,rePassword}=this.state;
        //var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
        
      
        if(password!==rePassword){
            const err=['passwords do not match'];
            this.setState({
                passwordError:err
            });
        }
        if(password.length<6){
            const err=['password should have atleast 6 characters'];
            this.setState({
                passwordError:err
            })
        }
        if(displayName===''){
            const err=['name cannot be empty'];
            this.setState({
                emptyName:err
            });
        }
        if(!email){
            const err='field cannot be empty';
            this.setState({
                invlidMail:err
            });
        } 
        try{
            const{user}= await auth.createUserWithEmailAndPassword(email,password);
            await handleUserProfile(user,{displayName});
            this.setState({...initialState});
        }catch(err){
            console.log(err);
        }    
    }

    render() {
        const{displayName,email,password,rePassword,passwordError,emptyName,invlidMail}=this.state;
        return (
            <div className='signup'>
                <div className='wrap' >
                    <h2>Sign Up</h2>
                    {emptyName.length>0&&(
                        <ul>
                            {emptyName.map((err,index)=>{
                                return(
                                    <li key={index }>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                    {passwordError.length>0&&(
                        <ul>
                            {passwordError.map((err,index)=>{
                                return(
                                    <li key={index }>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}



                    <div className='formwrap'>
                        <form onSubmit={this.handleSubmit}>
                            <FormInput
                                type='text'
                                name='displayName'
                                value={displayName}
                                placeholder='Enter Full Name'
                                onChange={this.handleChange}
                            />
                            <FormInput
                                type='email'
                                name='email'
                                value={email}
                                placeholder='E-mail address'
                                onChange={this.handleChange}
                            />  
                            <FormInput
                                type='password'
                                name='password'
                                value={password}
                                placeholder='Enter password'
                                onChange={this.handleChange}
                            />   
                            <FormInput
                                type='password'
                                name='rePassword'
                                value={rePassword}
                                placeholder='Re-Enter password'
                                onChange={this.handleChange}
                            />
                            <button className='btn'>Register</button>
                                                    
                        </form>           
                    </div>
                </div>
            </div>
        )
    }
}
