import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useContext, useEffect } from "react";
import { useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

export default function UpdateMovie() {
    const [data,setData] = useState({title:"",overview:""})
    const {movies, updateMovie} = useContext(MovieContext)
    const {id} = useParams()
    const [validTitle, setValidT] = useState('')
    const [validDes, setValidDes] = useState('')
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/Data/${id}`).then((res)=>{
            setData(res.data)
        })
     },[id])

const handleChange = (event) => {
    const {name,value} = event.target;
    setData({...data, [name]:value})
    console.log(data[name]);
}

    if (!movies) return <div>Loading....</div>
  return (
    // {movies.find((m)=> m.id === +id)}
        <Box style={{backgroundColor:'rgb(162 232 239 / 70%)', borderRadius:'20px', padding:'20px'}} onSubmit={(e)=>{
            e.preventDefault();
            if(data.title && data.overview)  {
                updateMovie(id,data)
                alert("Movie has been updated")}
            else alert("Please fill all data")
            }}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        //   Title
          id="outlined-error-helper-text"
          label="Title"
        //   helperText={validTitle}
          name="title"
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField style={{height:'100px'}}
        //   Description
          id="outlined-error-helper-text"
          label="Discription"
          name="overview"
          value={data.overview}
          onChange={handleChange}
        //   helperText={validDes}
        />
      </div>
      <div>
      <Button type="submit" variant="outlined" style={{color:'#000', borderColor:'#000', marginRight:'10px'}} >Update</Button>
        <Link to='/'>
        <Button variant="outlined" style={{color:'#000', borderColor:'#000'}}>Back</Button>
        </Link>
      
      </div>
      
        
    </Box>
    
    
  );
}