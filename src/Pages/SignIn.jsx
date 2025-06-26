import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {
    const {signInUser} = use(AuthContext)

    const handleSignIn=(e)=>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const signInData = Object.fromEntries(formData.entries())
        // console.log(signInData)
        const email = signInData.email;
        const password = signInData.password;

        // signin user With email and Password
        signInUser(email , password)
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
            });
            // patch data 
            const signInInfo ={
                email,
                lastSignInTime:result.user?.metadata?.lastSignInTime
            }
            // fetch update data
            fetch("http://localhost:4000/users" , {
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(signInInfo)
            })
            .then((res)=>res.json())
            .then((data)=>{
                console.log("after update patch data" , data)
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
       
    <div className='min-h-screen bg-base-300 py-20'>
                <div className="card bg-base-100 mx-auto  max-w-xl shrink-0 shadow-xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Signin now!</h1>
                <form onSubmit={handleSignIn} className="fieldset">
              
                <label className="label">Email</label>
                <input type="email" name='email' className="input w-full" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />
                <button type='submit' className="btn btn-neutral mt-4">Signin</button>
                </form>
            </div>
        </div>
    </div>
        
    );
};

export default SignIn;