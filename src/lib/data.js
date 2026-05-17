// //import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

import { headers } from "next/headers";
import { auth } from "./auth";
import { authClient } from "./auth-client";

// export const pushDestinationData = async(destination) => {
//     'use server';
//     const res = await fetch('${process.env.NEXT_PUBLIC_SERVER_URL}/destination', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(destination)
//     });
//     const data = await res.json();
//     if (data.insertedId > 0) {
//         revalidatePath('/')
//         redirect('/')
//     }
//     console.log(destination, 'destination data');
//     return data;

// }

// for authentication token
// const { token } = await auth.api.getToken({
//         headers: await headers()
// })

export const featuresDestination = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/features`);
    const data = res.json();
    return data;
}


export const getAllDestinationList = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`)
    const data = res.json();
    return data;
}


export const getPlaceDetailsById = async(id) => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    //console.log("token by Farid: ", token);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return data;
}

export const myBookingDestinations = async(id) => {
    //const {data: tokenData } = await authClient.token()
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    return data;
}