"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";

export function DeleteDestination({ destination, PlaceDeleteID}) {
    const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    description,
    imageUrl,
  } = destination;
  const handleDeletePlace = async() => {
    await PlaceDeleteID(_id);
    //redirect('/places');
  }
  return (
    <AlertDialog>
      <Button variant="danger">Delete</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>{destinationName}</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button 
                slot="close" variant="danger"
                onClick={handleDeletePlace}
                >
                Delete {country}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}