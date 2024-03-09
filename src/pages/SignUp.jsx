// Signup.js

import React from 'react';
import { useState } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebaseConfig/firebase';

const Signup = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    // const auth = getAuth()
    const HandleOnSubmit = (emailVal,passwordVal)=>{
        createUserWithEmailAndPassword(auth,emailVal,passwordVal).then((userCredendial)=>{
            const user = userCredendial.user
            console.log(user)
        }).catch((error)=>{
            const errorCode = error.code;
            console.log(errorCode)
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }   

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 text-dark">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={()=>HandleOnSubmit(email,password)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
