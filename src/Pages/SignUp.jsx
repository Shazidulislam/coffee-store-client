import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} = use(AuthContext)
    // console.log(createUser)

    const handleSignUp =(e) =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        // const newUsre = Object.fromEntries(formData.entries())
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const email = newUsre.email;
        // const password = newUsre.password
         const {email , password , ...restData } = Object.fromEntries(formData.entries())
        console.log(restData)

        // const userProfile = {
        //     email,
        //     ...rest
        // }

        // registeuserWithEmailandPassword with firebase auth
        createUser(email , password)
        .then(result=>{
            console.log(result.user)
  
             const userProfile = {
                    email,
                    ...restData,
                    lastSignInTime:result.user?.metadata?.lastSignInTime,
                    creationTime:result.user?.metadata?.creationTime,
                }
           
                 // post data client to server
                    fetch("http://localhost:4000/users" ,{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify(userProfile)
                    })
                    .then((res)=>res.json())
                    .then((data)=>{
                        console.log("create after data",data)
                        if(data.insertedId){
                         Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your account is created!",
                            showConfirmButton: false,
                            timer: 1500
                            });
                        }
                        
                    })
                    })
                    .catch(error=>{
                        console.log(error)
                    })
    }

    return (
          
    <div className='min-h-screen bg-base-300 py-20'>
                <div className="card bg-base-100 mx-auto  max-w-xl shrink-0 shadow-xl">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                <label className="label">Name</label>
                <input type="text" name='name' className="input w-full" placeholder="Name" />
                <label className="label">Address</label>
                <input type="text" name='address' className="input w-full" placeholder="Address" />
                <label className="label">Phone</label>
                <input type="text" name='phone' className="input w-full" placeholder="Phone Number" />
                <label className="label">Potho</label>
                <input type="url" name='potho' className="input w-full" placeholder="Potho URL" />
                <label className="label">Email</label>
                <input type="email" name='email' className="input w-full" placeholder="Email" />
                <label className="label">Password</label>
                <input type="password" name='password' className="input w-full" placeholder="Password" />
                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>
            </div>
        </div>
    </div>
        
    );
};

export default SignUp;