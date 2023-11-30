import { useEffect, useState } from 'react';
import '../styles/home.css'

const Home = () => {

    let[movies , setMovies] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then(res=>res.json())
        .then((data)=>{setMovies(data);})
    } , [])



    return ( <div className="home-comp">
                <h1>All movies</h1>
                {movies && <div className="all-movies">
                    {
                        movies.map((movie)=>{
                            return(
                                <div className='movie'>
                                    <img src={movie.poster} alt="" />
                                    <h1>{movie.moviename}</h1>
                                    <h3>{movie.release_date}</h3>
                                </div>
                            )
                        })
                    }
                            </div>}
            </div> );
}
 
export default Home;