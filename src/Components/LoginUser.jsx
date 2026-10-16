import React, { useState } from 'react'
import { userLogin } from '../redux/employeeActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function LoginUser() {
    const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch()
    // this for api data......
    const handleLogin=async ()=>{
        try{
          // sending data (login info)
            const response=await fetch("https://dummyjson.com/auth/login",{
                method:"POST",
                // this is very important this means you are telling the server "I am sendig the data in json format"
                // Content-Type = what kind of data you are sending

                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({
                    username,
                    password,
                    // this for how we use to expires token forcfully 
                  // expiresInMins: 1
                })
        })
        const data=await response.json();
        // if there is error in login then we will get message in response so we can check that and alert user about invalid credentials
        if (!response.ok) {
      alert(data.message || "Invalid credentials");
      return;
    }
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user",JSON.stringify(data))
        dispatch(userLogin(data))
        alert("Login successful")
        navigate("/table")
    }
    catch(error){
        console.log(error);
        alert("An error occurred while logging in")
    }
    }
    // this for when we store the data locally............................
//     const handlelogin=(e)=>{
//         e.preventDefault();
//         // check the empty field
//         if(!username || !password){
//             alert("All fields are required");
//             return;
//         }
//         // get users from localStorage
//         const users=JSON.parse(localStorage.getItem("users")) ||[];
    
//         // check if users exists
//         const user=users.find(
//             (e)=>e.username===username && e.password===password
//         );
    
//         // if not found
//         if(!user){
//             alert("Invalid Details")
//             return;
//         }

// // if user found
//     localStorage.setItem("user",JSON.stringify(user))
//         dispatch(userLogin(user))
//         alert("Login Successfull")
//         navigate("/table")
//     };


  return (
    <>
     <div>

      <div className="flex justify-center items-start h-screen bg-gray-100 ">
      
      <div className="bg-white p-6 rounded-xl shadow-md w-80 mt-10">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <label className="block text-gray-700 text-sm font-bold" htmlFor="username">
          Enter Username :
        </label>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-3 p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="block text-gray-700 text-sm font-bold" htmlFor="password">
        Password :
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

        <p
          className="text-sm text-blue-500 mt-3 cursor-pointer text-center"
          onClick={() => navigate("/register")}
        >
          New User/Register
        </p>
      </div>

    </div>
     </div>

    </>
  )
}

export default LoginUser
