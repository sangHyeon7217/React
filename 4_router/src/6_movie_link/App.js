

// App.js

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../App.css';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([])

    const getMovies = async() => {
        await axios.get(' https://api.github.com/search/repositories?q=react')
                .then(result => {
                    const movies_temp =  result.data.data.movies;                    
                    setMovies([...movies_temp])
                    setIsLoading(false)
                })
    }

    useEffect(()=>{        
        getMovies();
    },[])

    return(
        <div className='App'>
            { isLoading? 
                <div className='App-header'> 로딩중</div>  : 
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/'             element={<MovieList    movies={movies} />} />
                            <Route path='/detail/:idx' element={<MovieDetail movies={movies} />} />

                        </Routes>
                    </BrowserRouter>
                </div>      
            }
        </div>
    )
}

export default App;