import { featuresDestination } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const FeatureDestination = async () => {
  const features = await featuresDestination();
  return (
    <div className="">
      <div className="flex justify-between mx-10 mt-4">
        <div>
          <h2 className="text-3xl font-bold">Feature of Destination</h2>
          <p className="text-[#647489]">
            Handpicked travel experiences for the adventure seekers
          </p>
        </div>

        <div>
          <Link href={"/places"}>
            <Button
              variant="outline"
              className={
                "text-cyan-500 font-bold rounded-none border-1 border-cyan-500"
              }
            >
              All Destination
            </Button>
          </Link>
        </div>
      </div>
      <div className="max-w-8xl mx-8 my-4 grid grid-cols-3 gap-1">
        {/* {features.map((feature) => (
          <div
            className="bg-purple-300  border-1 shadow-sm gap-2"
            key={feature._id}
          >
            <h2>{feature.destinationName}</h2>
          </div>
        ))} */}
        {features.map((place) => (
          <div
            key={place._id}
            className="bg-slate-50 rounded-md   shadow-sm mx-2 my-2"
            //   className="bg-slate-50 w-3/4 mx-auto  my-2 rounded-md shadow-sm"
          >
            <Image
              className="rounded-ss-md rounded-se-md w-full h-fit"
              src={place.imageUrl}
              alt={place.destinationName}
              width={500}
              height={400}
            />
            <div className="px-4 py-2">
              <h2>{place.destinationName}</h2>
              <h2>{place.country}</h2>
              <p>{place.price}</p>
              <p>{place.category}</p>
              <p>{place.duration}</p>
              <p>{place.departureDate}</p>

              <p>{place.description}</p>
            </div>

            <Link
              className="flex items-center gap-2 mx-auto px-2"
              href={`/places/${place._id}`}
            >
              <Button
                variant="ghost"
                className={"my-2 mx-auto flex text-cyan-500"}
              >
                <FiExternalLink />
                Book Now
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureDestination;
