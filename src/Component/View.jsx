import React from 'react';
import { useLoaderData } from 'react-router';

const View = () => {
    const singleCoffee = useLoaderData()
    console.log(singleCoffee)
    return (
        <div>
            
        </div>
    );
};

export default View;