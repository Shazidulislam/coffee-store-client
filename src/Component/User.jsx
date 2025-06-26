import { deleteUser } from 'firebase/auth';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { auth } from '../firebase/firebase.conflig';

const User = () => {
    const initialUser = useLoaderData()
    const [user , setUser] = useState(initialUser)
    
      const handleDelete =(id)=>{
        console.log(id)
 
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                console.log(result.isConfirmed)
            if (result.isConfirmed) {
                 fetch(`http://localhost:4000/users/${id}` , {
                    method:"DELETE",
                 })
                .then((res)=>res.json())
                .then((data)=>{
                    if(data.deletedCount){
                        const remainingUser = user.filter((current)=>current._id !== id)
                        console.log(remainingUser)
                        setUser(remainingUser)
                        deleteUser(auth?.currentUser)
                        .then(()=>{
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted from firebase.",
                                icon: "success"
                            });
                        })
                        .catch((error)=>{
                            console.log(error)
                        })
                    }
                    // TODO DELETE USER FORM FIREBASE


                })
               
            }
            });

      }
     return (
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>
                  No
                </th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
            </tr>
            </thead>
            {/* body */}
            <tbody>
            {/* row 1 */}
            {
                user.map((currentUser , i)=> <tr key={i}>
                <th>
                <label>
                    {i+1}
                </label>
                </th>
                <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                        src={currentUser.potho} />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{currentUser.name}</div>
                    <div className="text-sm opacity-50">{currentUser.address}</div>
                    </div>
                </div>
                </td>
                <td>
                 {currentUser.phone}
                <br />
                </td>
                <td>{currentUser.email}</td>
                <th>
                <button className="btn  btn-neutral">V</button>
                <button className="btn  btn-neutral mx-2">U</button>
                <button onClick={()=>handleDelete(currentUser._id)} className="btn  btn-neutral">X</button>
                </th>
               </tr>)
            }
              
            </tbody>
        </table>
        </div>
    );
};

export default User;