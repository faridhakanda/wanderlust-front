import { DeleteDestination } from "@/components/delDestination";
import { EditForm } from "@/components/editForm";
import { deletePlace } from "@/lib/actions";
//import { EditDestination } from '@/lib/actions';
import { getPlaceDetailsById } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const DetailsPage = async ({ params }) => {
  const { placeID } = await params;
  console.log(placeID, "place id");
  const placeDetail = await getPlaceDetailsById(placeID);
  console.log(placeDetail, "place details");

  return (
    <div className="mx-auto my-2 justify-center">
      <div className="flex justify-end space-x-2">
        <EditForm destination={placeDetail} />
        <DeleteDestination
          destination={placeDetail}
          PlaceDeleteID={deletePlace}
        />
      </div>
      <div className="bg-slate-50 px-2 py-2 mx-auto my-2 rounded-md shadow-sm">
        <div className="w-xl px-2 py-2">
          <h2>{placeDetail.destinationName}</h2>
          <p>{placeDetail.country}</p>
          <p>{placeDetail.duration}</p>
          <p>${placeDetail.price}</p>
          <Image
            className="w-full h-fit rounded-md"
            src={placeDetail.imageUrl}
            alt={placeDetail.destinationName}
            width={500}
            height={400}
          />
          <p>{placeDetail.description}</p>
        </div>
        <div className="my-1 space-y-2">
          <Link
            className="mx-auto text-center flex bg-cyan-500 px-2 py-2 rounded-md justify-center"
            href={"/places"}
          >
            Go to Places
          </Link>
          <Link
            className="mx-auto text-center flex bg-purple-500 px-2 py-2 rounded-md justify-center"
            href={"/"}
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
