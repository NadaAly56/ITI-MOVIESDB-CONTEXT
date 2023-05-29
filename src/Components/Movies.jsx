import axios from "axios";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import { Link } from "react-router-dom";


const Movies = () => {
    const {movies, reFun}=useContext(MovieContext);
    //  console.log(movies)
    const img = "https://image.tmdb.org/t/p/w500/";
  
    return <div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', margin:'20px 50px'}}>
        <h1 style={{marginTop:'20px'}}>Movies</h1>
        <Link to='/add' >
        <button style={{backgroundColor:'lightblue', padding:'10px 20px', borderRadius:'5px',
            cursor:'pointer',
            boxShadow:'5px 10px 18px #888888', height:'50px'}}>Add Movies
        </button></Link>
        </div>
        
        {movies&&movies.map((movie) => (
            <div key={movie.id} style={{backgroundColor:'lightblue', padding:'10px', borderRadius:'5px',
            color:'gray', display:'flex',
            width:'80%', margin:'30px auto',
            boxShadow:'5px 10px 18px #888888'}}>
               <img alt="img" src={movie.backdrop_path?img+movie.backdrop_path:"./place.png"} style={{width:'30%'}}/>
               <div style={{padding:'10px'}}>
               <div style={{color:'#000', fontSize:'30px', marginBottom:'10px'}}>{movie.title}</div>
               <div>Overview: {movie.overview}</div>
               <button style={{ backgroundColor:'#000',
            borderRadius:'5px',
            padding:'5px 40px',
            fontSize:'25px',
            border:'0',
            color:'lightblue',
            margin:'20px',
            cursor:'pointer',
            boxShadow:'5px 10px 18px #888888'}} onClick={() => {
                axios.delete(`http://localhost:3000/Data/${movie.id}`)
                reFun(movie.id)
            }}>Delete</button>
            <Link to={`${movie.id}`}>
            <button style={{ backgroundColor:'#000',
            borderRadius:'5px',
            padding:'5px 40px',
            fontSize:'25px',
            border:'0',
            color:'lightblue',
            margin:'20px',
            cursor:'pointer',
            boxShadow:'5px 10px 18px #888888'}}>Update</button>
            </Link>
            <Link to={`detailes/${movie.id}`}>
            <button style={{ backgroundColor:'#000',
            borderRadius:'5px',
            padding:'5px 40px',
            fontSize:'25px',
            border:'0',
            color:'lightblue',
            margin:'20px',
            cursor:'pointer',
            boxShadow:'5px 10px 18px #888888'}}>Details</button>
            </Link>
            
               </div>
           </div>
        ))}
    </div> 
}
export default Movies;