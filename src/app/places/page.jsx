import Banner from "@/components/banner";
// import PlaceDeletePage from "@/components/delPlace";
// import { deletePlace } from "@/lib/actions";
import { getAllDestinationList } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
export default async function Home() {
  const places = await getAllDestinationList();
  //console.log(places);
  return (
    <div>
      <Banner />
      <div>
        <div className="grid grid-cols-3 bg-lime-200 mx-auto">
          {places.map((place) => (
            <div
              key={place._id}
              className="bg-slate-50 w-3/4 mx-auto  my-2 rounded-md shadow-sm"
            >
              <Image
                className="rounded-ss-md rounded-se-md w-full h-fit"
                src={place.imageUrl}
                alt={place.destinationName}
                width={500}
                height={400}
              />
              
              <h2>{place.destinationName}</h2>
              <h2>{place.country}</h2>
              <p>{place.price}</p>
              <p>{place.category}</p>
              <p>{place.duration}</p>
              <p>{place.departureDate}</p>

              <p>{place.description}</p>
             
              <Link className="flex items-center gap-2 mx-auto px-2" href={`/places/${place._id}`}>
               <Button variant="ghost" className={'my-2 mx-auto flex text-cyan-500'}>
                <FiExternalLink />
                    Book Now
                </Button>
                
              </Link>
              
                
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
