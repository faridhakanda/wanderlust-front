"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";

export function BookingDelete({ bookingId }) {
    console.log("booking id is: ", bookingId);
    const handleDelete = async() => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        console.log(data, 'delete data!');
        redirect('/mybookings');
    }
  return (
    <AlertDialog>
      <Button className={'rounded-md'} variant="outline">
      <TrashBin />
        Cancel
        </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel the Booking Destination?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button   slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Destination
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}