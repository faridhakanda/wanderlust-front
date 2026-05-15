'use client';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const { 
        data: session,
        // isPending,
        // error,
        // refech
    } = authClient.useSession()
    console.log(session);
    const user = session?.user;
    console.log('user information in login/signup page: ', user);
    
    const handleLogout = async() => {
        await authClient.signOut()
    }
    
    
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
            <ul className='flex gap-3 items-center'>
                <li>
                    <Link href={'/profile'}>Profile</Link>
                </li>
                { user ? 
                    <div className='flex gap-3'>
                        <h2 className='bg-purple-500 text-white px-2 py-1 rounded-md'>{user?.name}</h2> 
                        <Link onClick={handleLogout} className='py-1 bg-red-500 px-2 rounded-md' href={'/login'}>Logout</Link>
                    </div>
                   
                    :
                    <div className='flex gap-3 items-center'>
                        <li>
                            <Link href={'/login'}>Login</Link>
                        </li>
                        <li>
                            <Link href={'/signup'}>Sign Up</Link>
                        </li>
                    </div>
                }
                
            </ul>
            
        </nav>
    );
};

export default Navbar;