'use client'
import { redirect } from 'next/navigation';
import React from 'react';

const PlaceDeletePage = ({ placeId, PlaceDeleteID }) => {
    const placeID = placeId;
    console.log(placeID, 'hello, user new delete!');
    //const userInfo = UserDeleteID;
    const handleDeleteMe = async () => {
        // const idNumber = 8229;
        // const userId = await idNumber;
        console.log('Delete Me!', placeID);
        await PlaceDeleteID(placeID);
        redirect('/places');
        
    }
    return (
        <div>
            <button 
                className='border-1 border-purple-500  px-2 py-1 rounded-md'
                onClick={handleDeleteMe}
            >
                Delete Me
            </button>
        </div>
    );
};

export default PlaceDeletePage;