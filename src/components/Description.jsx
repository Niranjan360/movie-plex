import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = () => {

    let {id} = useParams();
    let[movie , setMovie] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:4000/movies/" + id)
        .then(res=>res.json())
        .then((data)=>{console.log(data);})
    } , [])

    
    return ( <div className="description-comp">
                <h1>This is Description comp {id} </h1>
            </div> );
}
 
export default Description;