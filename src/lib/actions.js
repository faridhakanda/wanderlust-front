// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export const EditDestination = async(placeID, formData) => {
//     'use server';
//     const editPlace = Object.fromEntries(formData.entries());
//     const res = await fetch(`http://localhost:5000/destination/${placeID}`, {
//         method: 'PATCH',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(editPlace)
//     });
//     const data = await res.json();
//     if (data.modifiedCount > 0) {
//         revalidatePath('/destination')
//         redirect('/places')
//     }
//     console.log(data, 'edit destination!');
//     return data;
// }
'use server';

import { redirect } from "next/navigation";
import { auth } from "./auth";
import { headers } from "next/headers";


// const { token } = await auth.api.getToken({
//     headers: await headers()
// })

export const deletePlace = async(placeID) => {
    'use server';
    // const { data: tokenData } = await auth.api.getToken();
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`http://localhost:5000/destination/${placeID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    redirect('/places');
    //return data;
}