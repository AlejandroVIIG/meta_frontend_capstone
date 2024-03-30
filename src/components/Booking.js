import React from "react";
import BookingForm from "./BookingForm";

function Booking(props) {
    return (
        <div>
            <BookingForm schedule={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
        </div>
    )
}

export default Booking;