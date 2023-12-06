import { useState } from 'react';
import '../styles/addmovie.css'
import { useNavigate } from 'react-router-dom';

const Addmovie = () => {

    let yearsArray = [];
    for (let year = 1950; year <= 2023; year++) {
        yearsArray.push(year);
    }

    let[movie , setmovie] = useState("");
    let[hero , setHero] = useState("");
    let[poster , setPoster] = useState("");
    let navigate = useNavigate();

    let addMovie = (e)=>{
        e.preventDefault();

        let newMovie = {
            moviename : movie,
            hero : hero ,
            poster : poster,
            heroine:"Shree nidhi",
            director:"Prashanth neel",
            production_house:"Hombale",
            budget:"100cr",
            collection:"800cr",
            genre:"Action drama",
            release_date: "2019",
            rating:"9.1",
            description:"KGF is an Indian period action film series set mostly in the Kolar Gold Fields, which gives the series its name, created by Prashanth Neel and produced by Hombale Films starring Yash in lead role with an ensemble supporting cast.[4] Set in the late 1970s and early 1980s, the series follows two narrators, Anand Ingalangi and his son Vijayendra Ingalangi, who gives an interview of a book written by Anand to a leading news channel, which tells the life story of Raja Krishnappa Bairya alias Rocky (Yash), a Mumbai-based high ranking mercenary born in poverty and how he became the most dreaded person at that time.",
            duration:"2h 45mins",
            languages:["Kannada","Hindi","Tamil","Telgu","English"],
            trailer_link:"https://www.youtube.com/embed/-KfsY-qwBS0?si=dHakex7DJtzFxR28",
            banner:"https://www.koimoi.com/wp-content/new-galleries/2022/04/kgf-sets-foot-in-metaverse-fans-snap-up-nfts-in-record-time-001.jpg",
        }

        let config = {
                        method : "POST",
                        headers: {"Content-Type":"application/json"},
                        body :JSON.stringify(newMovie)
                     }

        fetch("http://localhost:4000/movies" , config)
        .then(()=>{
            alert("new movie added");
            // window.location.reload();
            // use react tostify package
            navigate("/")
        }) 
    }

    
    return ( 
    <div className="addmovie-comp">
        <h1>Add New Movie</h1>

        <form onSubmit={addMovie}>  
            <input type="text" placeholder="Movie Name" value={movie} onChange={(e)=>{setmovie(e.target.value);}}/>
            <input type="text" placeholder="Hero Name" value={hero} onChange={(e)=>{setHero(e.target.value);}}/>



            <input type="text" placeholder="Heroine Name" />
            <input type="text" placeholder="Director" />
            <input type="text" placeholder="Production house" />
            <input type="text" placeholder="Budget in crores" />
            <input type="text" placeholder="collection in crores" />
            <fieldset>
                <legend>Genre</legend>
                <div>
                    <input type="checkbox" name="genre" id="ac" /> <label htmlFor="ac">Action</label>
                    <input type="checkbox" name="genre" id="ad" /> <label htmlFor="ad">Adventure</label>
                    <input type="checkbox" name="genre" id="cr" /> <label htmlFor="cr">Crime</label>
                    <input type="checkbox" name="genre" id="co" /> <label htmlFor="co">Comedy</label>
                    <input type="checkbox" name="genre" id="ho" /> <label htmlFor="ho">Horror</label>
                    <input type="checkbox" name="genre" id="ro" /> <label htmlFor="ro">Romantic</label>
                    <input type="checkbox" name="genre" id="th" /> <label htmlFor="th">Thriller</label>
                    <input type="checkbox" name="genre" id="sf" /> <label htmlFor="sf">Sci-fi</label>
                </div>
            </fieldset>
            <select>
                <option selected disabled>Released Year</option>
                {
                    yearsArray.map((y)=>{return(<option>{y}</option>)})
                }
            </select>
            <input type="number" placeholder="Rating" min="1" max="10" step="0.1"/>
            <textarea placeholder="Movie Description" cols="90" rows="5"></textarea>
            <div className="duration">
                <select>
                    <option selected disabled>Hours</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <select>
                    <option selected disabled>Minutes</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>5</option>
                    <option>....</option>
                </select>
            </div>
            <fieldset>
                <legend>Languages</legend>
                <div>
                    <input type="checkbox" name="lang" id="eb" /> <label htmlFor="ac">English</label>
                    <input type="checkbox" name="lang" id="ad" /> <label htmlFor="ad">Hindi</label>
                    <input type="checkbox" name="lang" id="cr" /> <label htmlFor="cr">Kannada</label>
                    <input type="checkbox" name="lang" id="co" /> <label htmlFor="co">Tamil</label>
                    <input type="checkbox" name="lang" id="ho" /> <label htmlFor="ho">Telgu</label>
                    <input type="checkbox" name="lang" id="ro" /> <label htmlFor="ro">Malayalam</label>
                </div>
            </fieldset>
            <input type="url" placeholder="trailer_link" />
            <input type="url" placeholder="banner" />
            <input type="url" placeholder="poster" value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>

            <input type="submit" value="Add new movie" />
        </form>
    </div> );
}
 
export default Addmovie;