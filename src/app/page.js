import Banner from "@/components/banner";
import FeatureDestination from "@/components/featured";
import { getAllDestinationList } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  //const places = await getAllDestinationList();
  //console.log(places);
  return (
    <div>
      <Banner />
      <FeatureDestination />
      {/* <div>
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
              <button
                className="bg-purple-500 px-2 py-2 mx-2 my-2 rounded-md"
                
                >
                <Link href={`/destination/${place._id}`}>
                    See Details
                </Link>
                
              </button>
              <h2>{place.destinationName}</h2>
              <h2>{place.country}</h2>
              <p>{place.price}</p>
              <p>{place.category}</p>
              <p>{place.duration}</p>
              <p>{place.departureDate}</p>

              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
