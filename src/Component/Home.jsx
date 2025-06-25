import React from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData()
    console.log(coffees)
    return (
        <div>
           <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 py-6'>
             {
                coffees.map((coffee)=><CoffeeCard  key={coffee._id} coffee={coffee}></CoffeeCard>)
            }
           </div>
        </div>
    );
};

export default Home;