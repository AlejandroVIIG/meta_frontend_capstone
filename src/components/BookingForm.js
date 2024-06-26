import React, { useState } from "react";

function BookingForm(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleChange = (e) => {
        const targetDate = e.target.value;
        setDate(targetDate);
        props.dispatch(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    console.log(props.availableTimes);

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="booking_date">Choose date:</label>
                        <input id="booking_date" value={date} type="date" onChange={e => handleChange(e)} required/>
                    </div>
                    <div>
                        <label htmlFor="booking_time">Choose time:</label>
                        <select id="booking_time" value={time} onChange={e => setTime(e.target.value)} required>
                            <option value="">Select a time</option>
                            {
                                props.schedule.availableTimes.map(availableTime => { return <option key={availableTime}>{availableTime}</option>})
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="booking_guests">Number of guests:</label>
                        <input type="number" id="booking_guests" value={guests} min='1' onChange={e => setGuests(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="booking_occasion">Occasion:</label>
                        <select id="booking_occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                            <option>Birthday</option>
                            <option>Engagement</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="booking_name">Name:</label>
                        <input type="text" id="booking_name" value={name} onChange={e => setName(e.target.value)} required/>
                        
                        <label htmlFor="booking_email">Email:</label>
                        <input type="email" id="booking_email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className="btnReceive">
                        <button type="submit">Make your reservation</button>
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default BookingForm;