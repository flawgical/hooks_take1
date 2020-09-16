import React, { useState, useEffect } from 'react';
import axios from 'axios'

function SWMovies(){
    
    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get(`https://swapi.dev/api/films/${number}/`)
            setMovie(response.data)
            console.log(response)
        }
        fetchData()
    }, [number]);

    return (
        <>
    <h1>Pick a Movie</h1>
        <h4>{movie.title}</h4>
        <p>{movie.opening_crawl}</p>
    <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
    </select>
        </>
    )
}

export default SWMovies; 
