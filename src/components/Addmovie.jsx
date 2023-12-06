const Addmovie = () => {

    let yearsArray = [];
    for (let year = 1950; year <= 2023; year++) {
        yearsArray.push(year);
    }
    

    
    return ( 
    <div className="addmovie-comp">
        <h1>Add New Movie</h1>

        <form>  
            <input type="text" placeholder="Movie Name" />
            <input type="text" placeholder="Hero Name" />
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
            <textarea placeholder="Movie Description" cols="30" rows="10"></textarea>
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
            <input type="url" placeholder="poster" />

            <input type="submit" value="Add new movie" />
        </form>
    </div> );
}
 
export default Addmovie;