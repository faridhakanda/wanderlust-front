// //import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

// export const pushDestinationData = async(destination) => {
//     'use server';
//     const res = await fetch('http://localhost:5000/destination', {
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


export const getAllDestinationList = async() => {
    const res = await fetch('http://localhost:5000/destination')
    const data = res.json();
    return data;
}


export const getPlaceDetailsById = async(id) => {
    const res = await fetch(`http://localhost:5000/destination/${id}`)
    const data = await res.json();
    return data;
}