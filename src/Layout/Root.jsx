import React from 'react';
import { Link, Outlet } from 'react-router';
import Headers from '../Component/Headers';

const Root = () => {
    return (
        <div>

            <Headers></Headers>
            <div className='space-x-10'>
                <Link to={"/"}>Home</Link>
                 <Link to={"/addcoffee"}>Add Coffee</Link>
            </div>

            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;