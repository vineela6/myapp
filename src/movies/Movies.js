import React, { useState, useEffect } from 'react';
import './Movies.css';
import Navbar from './Navbar';
import Map from './Map';
//import Stringify from '../Stringify';
const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [input, setInput] = useState('')
    useEffect(() => {
        fetch('https://www.omdbapi.com/?s=spider&apikey=4a3b711b').then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search])
                setIsLoaded(true)
            }, 2000)
        })
    }, []);
    const inputHandler = (e) => {
        const { value } = e.target;
        setInput(value);
    }
    const Search = () => {
        fetch(`https://www.omdbapi.com/?s=${input}}&apikey=4a3b711b`).then(response => response.json()).then(json => {
            setTimeout(() => {
                const { Search, totalResults } = json
                setMovies([...Search]);
                setIsLoaded(true);
            }, 2000)
        })

    }
    return (

        <div class="body">
            <div>
                <Navbar inputHandler={inputHandler} Search={Search}></Navbar>
            </div>
            <br /><br />
            {!isLoaded && (<img src="https://i.giphy.com/media/jAYUbVXgESSti/giphy.webp" />)}
            {/*<Stringify context={movies}></Stringify>*/}
           
                <Map movies={movies}></Map>

            </div>
        
    )
}

export default Movies
