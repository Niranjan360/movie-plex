import { useEffect, useState } from 'react';
import '../styles/home.css'
import Movielist from './Movielist';

const Home = () => {

    let[movies , setMovies] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:4000/movies")
        .then(res=>res.json())
        .then((data)=>{setMovies(data);})
    } , [])


    return ( <div className="home-comp">

               {movies && <Movielist movies={movies} title="All movies"/>}

               {movies && <Movielist movies={movies.filter((v)=>{return v.release_date<2000})} title="90's movies"/>}


            </div> );
}
 
export default Home;