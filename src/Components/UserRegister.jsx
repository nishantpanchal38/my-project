import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function UserRegister() {
    const navigate=useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister=(e)=>{
        e.preventDefault();
        // here we add some logic for validation 
        if(!username || !email || !password){
            alert("Please fill all the fields");
            return;
        }
        const newUser={username,email,password};
        // getting the existing users from local storage

            let existingUsers=[];
            try{
                existingUsers=JSON.parse(localStorage.getItem("users")) || [];

            }catch(error){
                existingUsers=[]
            }
        // const existingUsers=JSON.parse(localStorage.getItem("users")) || [];
        // check duplicate before adding new user if user with same username or email already exist then we will alert user that user already exist
        const alreadyExist=existingUsers.some((user)=>user.username===username || user.email===email);
        if(alreadyExist){
            alert("User with same username or email already exist");
            return;
        }

        // add new user to existing users array and then setting it to local storage
        existingUsers.push(newUser);
        // save the updated users array to local storage
        localStorage.setItem("users",JSON.stringify(existingUsers));
        
        alert("Registration successful! Please login with your credentials.");
        navigate("/")
        // 
        

    }
  return (
    <>
      <div>
        <h1 className='text-3xl font-bold text-center mt-10'>User Registration Form</h1>
        <form className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-10'
        onSubmit={handleRegister}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>Username</label>
            <input type='text' id='username' placeholder='Enter username' className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            onChange={(e)=>setUsername(e.target.value)}
             value={username}/>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter email' className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            onChange={(e)=>setEmail(e.target.value)}
            value={email} />
          </div>
          <div className='mb-4  '>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
            <input type='password' id='password' placeholder='Enter password' className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
            onChange={(e)=>setPassword(e.target.value)}
            value={password} />
          </div>
          <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200'
          onClick={()=>{
          
          }}
          >Register</button>
        </form> 
      </div>
    </>
  )
}

export default UserRegister
