import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import Hero from "./Hero";
import ConfirmedBooking from "./ConfirmedBooking";

const fetchAPI = function(date) {
    let result = [];
    let random = Math.random();
    for(let i = 17; i <= 23; i++) {
        if(random < 0.5) {
            result.push(i + ":00");
        }else {
            result.push(i + ":30");
        }
    }
    return result;
}

const submitAPI = function(formData) {
        return true;
    }

function Main() {
    const initialState = {availableTimes: fetchAPI(new Date())};
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date())};
    }

    const navigate = useNavigate();
    function submitForm(formData) {
        if(submitAPI(formData)){
            navigate("/confirmed")
        }
    }

    return (
        <main>
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/booking" element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
                <Route path="/confirmed" element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    )
}

export default Main;