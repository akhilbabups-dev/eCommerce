import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {fireBaseConfig} from './Config';
firebase.initializeApp(fireBaseConfig);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

//sign in with google
const googleProvider= new firebase.auth.GoogleAuthProvider(); 
googleProvider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>{auth.signInWithPopup(googleProvider)};
export const handleUserProfile = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const {uid} = userAuth;
    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get();
    if(!snapshot.exists){
        const{displayName, email} = userAuth;
        const timestamp = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdDate:timestamp,
                ...additionalData
            });
        }catch(err){
            console.log(err);
        }
    }
    return userRef;
}

