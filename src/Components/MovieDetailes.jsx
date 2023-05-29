import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";
import axios from "axios";

const MovieDetailes = () => {
    const {movies} = useContext(MovieContext)
    const [movie,setMovie]= useState(null);
    const {id} = useParams()
    const img = "https://image.tmdb.org/t/p/w500/";

    useEffect(()=>{
        axios.get(`http://localhost:3000/Data/${id}`).then((res)=>{
            setMovie(res.data)
        })
     },[id])

     if (!movie) return <div>Loading...</div>
    return <div key={movie.id} style={{backgroundColor:'lightblue', padding:'10px', borderRadius:'5px',
    color:'gray', display:'flex',
    width:'80%', margin:'30px auto',
    boxShadow:'5px 10px 18px #888888'}}>
       <img alt="img" src={img+movie.backdrop_path} style={{width:'30%'}}/>
       <div style={{padding:'10px'}}>
       <div style={{color:'#000', fontSize:'30px', marginBottom:'10px'}}>{movie.title}</div>
       <div>Overview: {movie.overview}</div>
    <Link to={`/`}>
    <button style={{ backgroundColor:'#000',
    borderRadius:'5px',
    padding:'5px 40px',
    fontSize:'25px',
    border:'0',
    color:'lightblue',
    margin:'20px',
    cursor:'pointer',
    boxShadow:'5px 10px 18px #888888'}}>Back</button>
    </Link>
    
       </div>
   </div>
}
export default MovieDetailes;