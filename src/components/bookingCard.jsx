"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);
  const { destinationName, price, _id, imageUrl, country } = destination;
  const [departureDateTime, setDepartureDate] = useState(null);
  //console.log(new Date(departureDateTime), "date for tour!");

  const handleBooking = async () => {
    // if (!user) {
    //     alert('Please log in a book trip!');
    //     return;
    // }
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDateTime: new Date(departureDateTime),
    };
    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    toast.success("Your booked succesfully!");
    redirect("/places");

    // console.log(data, "booking information detail with post!")
  };

  return (
    <div className="bg-blue-200 w-48 p-2 border-1 rounded-md shadow-sm">
      <h2 className="text-sm text-muted">Starting from</h2>
      <h2>{destinationName}</h2>
      <p className="text-3xl font-bold text-cyan-500">${price}</p>

      <p>per person</p>
      <DateField
        onChange={setDepartureDate}
        className="w-[150px] my-2"
        name="date"
      >
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button
        onClick={handleBooking}
        className={"w-full rounded-none bg-cyan-500"}
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingCard;
