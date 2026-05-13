import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-around bg-slate-50 p-3 items-center'>
            <ul className='flex gap-3'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/places'}>
                        Places
                    </Link>
                </li>
                <li>
                    <Link href={'/add-destinations'}>Add Destinations</Link>
                </li>
                <li>
                    <Link href={'/mybookings'}>My Bookings</Link>
                </li>

            </ul>
            <div>
                <Image src={'/assets/Wanderlast.png'} alt="wanderlast logo" width={150} height={150} />
            </div>
            <ul className='flex gap-3'>
                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                <li>
                    <Link href={'/login'}>Login</Link>
                </li>
                <li>
                    <Link href={'/signup'}>Sign Up</Link>
                </li>
            </ul>
            
        </nav>
    );
};

export default Navbar;