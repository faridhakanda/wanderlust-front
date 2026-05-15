import { BookingDelete } from "@/components/bookingDelete";
import { auth } from "@/lib/auth";
import { myBookingDestinations } from "@/lib/data";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  //console.log(session?.user, 'my booking page!')
  const user = session?.user;
  //console.log(user?.id, 'current user id in my booking page!');
  //const userId = user?.id;
  const bookingDatas = await myBookingDestinations(user?.id);
  console.log(bookingDatas, "my bookings");
  return (
    <div>
      {bookingDatas.length > 0 ? (
        <div>
          <h2>My Booking Destination!</h2>
          <div>
            {bookingDatas.map((book) => (
              <div
                className="border-1 flex min-w-3xl justify-between mx-auto my-2 px-2 py-2 shadow-sm w-48 rounded-md"
                key={book._id}
              >
                <Image
                  src={book.imageUrl}
                  alt={book.destinationName}
                  width={400}
                  height={400}
                />
                <div className="">
                  <h2>{book.destinationName}</h2>
                  <p>{book.country}</p>
                  <p>Booking ID: {book._id}</p>
                  <p>
                    {new Date(book.departureDateTime).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      },
                    )}
                  </p>
                  <p className="text-cyan-500 font-bold text-xl">
                    ${book.price}
                  </p>
                  <p>{book.userName}</p>
                  {/* <Button className={"rounded-md my-2"} variant="outline">
                    <TrashBin />
                    <BookingDelete />
                  </Button> */}
                  {/* <div className="flex items-center">
                   
                    <BookingDelete />
                  </div> */}
                  <BookingDelete bookingId={book._id}/>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2>Not found any booking destination!</h2>
      )}
    </div>
  );
};

export default MyBooking;
