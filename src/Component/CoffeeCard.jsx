import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee}) => {
    const {_id ,name , quntity , supplier , potho ,price} = coffee || {}
    const handleDelete=(id)=>{
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
                    // start dlete the data 
                    fetch(`http://localhost:4000/coffees/${id}`,{
                        method:"DELETE"
                    })
                    .then((res)=>res.json())
                    .then((data)=>{
                        console.log("delete after data" , data)
                        Swal.fire({
                        title: "Deleted!",
                        text: "Your coffee has been deleted.",
                        icon: "success"
                        });
                    })
                    
                }
                });
    }
    return (
<div className=" p-2 rounded-md bg-gray-100 ">
  <div className="flex gap-4">
     <figure className=''>
          <img src={potho} className="max-w-sm rounded-lg shadow-2xl" />
     </figure>
     <div className='flex  justify-around gap-3 mt-12 w-full'>
            <div>
                <p className="py-1">Name : {name}</p>
                <p className="py-1">supplier:{supplier}</p>
                <p className="py-1">Quntity : {quntity}</p>
                <p className="py-1">Price : {price}</p>
            </div>
           <div className="join join-vertical space-y-2">
                <Link to={`/view/${_id}`}>
                <button className="btn join-item">Viwe</button>
                </Link>
                <Link to={`/updatecoffee/${_id}`}>
                   <button  className="btn join-item">Eidet</button>
                </Link>
               
                <button onClick={()=>handleDelete(_id)} className="btn join-item">X</button>
           </div>
     </div>
  </div>
</div>
    );
};

export default CoffeeCard;