import React, { useState, useEffect } from 'react';
import "./Row.css"
import axios from "./axios";
import requests from './request';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs based a on a specific condition/variable
    useEffect(() => {
        // if [], run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            return request;
        }   
        fetchData()
    },[]);

    return (
        <div className=''>
            <h2>{title}</h2>

            {/* container => posters */}
        </div>
    )
}

export default Row;
