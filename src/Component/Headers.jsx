import React from 'react';
import { Link, NavLink } from 'react-router';

const Headers = () => {
    return (
<header className="p-4   bg-gray-100   text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<h2>Coffee Store</h2>
		</a>
	    <ul className='flex justify-around gap-5'>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/addcoffee"}>Add Coffee</NavLink>
            </li>
            <li>
                <NavLink to={"/users"}>ALL User</NavLink>
            </li>
        </ul>
		<div className="items-center flex-shrink-0 hidden lg:flex">
            <Link to={"/signin"}>
             <button className="self-center px-8 py-3 rounded">Sign in</button>
            </Link>
			
            <Link to={"/signup"}>
                    <button className="self-center px-8 py-3 font-semibold rounded   bg-violet-600   text-gray-50">Sign up</button>
            </Link>
			
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6   text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
    );
};

export default Headers;