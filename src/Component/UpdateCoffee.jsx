import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {

    const coffeeData= useLoaderData()
    const { _id,name ,quntity , supplier ,taste , price , details , potho  } = coffeeData || {}

    const handleUpdateCoffee=(e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form)
        const Updatecoffee = Object.fromEntries(formData.entries())
        // console.log(Updatecoffee)
        // update data 

        fetch(`http://localhost:4000/coffees/${_id}` ,{
            method:"PUT",
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(Updatecoffee)
        } )
        .then(res=>res.json())
        .then(data => console.log("after update data",data))
        

    }
    return (
    <div className='px-24 py-12 mt-1 bg-[#F4F3F0]'>
            <div className='text-center space-y-4 p-12 '>
                <h1 className='text-4xl text-rancho text-[#374151]'>Update Coffee</h1>
                <p className='text-lg px-6 text-[#1B1A1A] mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <fieldset className="fieldset  border-base-300   rounded-box  border p-2">
                    <label className="text-lg text-[#1B1A1A90] font-bold">Name</label>
                    <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter a coffee name" />
                </fieldset>
                <fieldset className="fieldset  border-base-300   rounded-box  border p-2">
                    <label className="text-lg text-[#1B1A1A90] font-bold">Quntity</label>
                    <input type="number" name='quntity' defaultValue={quntity} className="input w-full" placeholder="Enter coffee quntity" />
                </fieldset>
                <fieldset className="fieldset  border-base-300   rounded-box  border p-2">
                    <label className="text-lg text-[#1B1A1A90] font-bold">Supplier</label>
                    <input type="text" className="input w-full" defaultValue={supplier} name='supplier' placeholder="Enter coffee supplier" />
                </fieldset>
                <fieldset className="fieldset  border-base-300   rounded-box  border p-2">
                    <label className="text-lg text-[#1B1A1A90] font-bold">Taste</label>
                    <input type="text" className="input w-full" defaultValue={taste} name='taste' placeholder="Enter coffee taste" />
                </fieldset>
                <fieldset className="fieldset  border-base-300   rounded-box  border p-2">
                    <label className="text-lg text-[#1B1A1A90] font-bold">Price</label>
                    <input type="number" className="input w-full" defaultValue={price} name='price' placeholder="Enter coffee Price" />
                </fieldset>
                <fieldset className="fieldset  border-base-300   rounded-box  border p-2">
                    <label className="text-lg text-[#1B1A1A90] font-bold">Details</label>
                    <input type="text" defaultValue={details} className="input w-full" name='details' placeholder="Enter coffee details" />
                </fieldset>
               </div>
                 <fieldset className="fieldset  border-base-300   rounded-box  border p-2">
                    <label className="text-lg text-[#1B1A1A90] font-bold">Potho</label>
                    <input type="url" defaultValue={potho} className="input w-full" name='potho' placeholder="Enter Potho URL" />
                </fieldset>
                <div className='px-2 mx-auto mt-3'>
                  <input type="submit" value="Update Coffee"  className='btn text-rancho w-full bg-[#D2B48C]' />

                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;