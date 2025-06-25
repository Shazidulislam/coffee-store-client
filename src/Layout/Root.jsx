import React from 'react';
import { Link, Outlet } from 'react-router';
import Headers from '../Component/Headers';

const Root = () => {
    return (
        <div>

            <Headers></Headers>


            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;