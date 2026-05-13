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

export const deletePlace = async(placeID) => {
    'use server';
    const res = await fetch(`http://localhost:5000/destination/${placeID}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    redirect('/places');
    //return data;
}