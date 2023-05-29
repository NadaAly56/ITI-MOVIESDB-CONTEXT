import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useContext } from "react";
import { useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import { Link } from 'react-router-dom';


export default function AddMovie() {
    const [data,setData] = useState({title:'',overview:'', poster_path:''})
    const {addMovie} = useContext(MovieContext)
//    const handleSubmit = () => {
//     axios.post('http://localhost:3000/Data').then(res => {
        
//     })
//    }
const handleChange = (event) => {
    const {name,value} = event.target;
    setData({...data, [name]:value})
    console.log(value)
}
  return (
    
        <Box style={{backgroundColor:'rgb(162 232 239 / 70%)', borderRadius:'20px', padding:'20px'}} onSubmit={(e)=>{
            e.preventDefault();
       
        if(data.title && data.overview)  {
          addMovie(data)
          alert("Movie has been Added")}
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
          // helperText="Incorrect entry."
          name="title"
          value={data.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
        //   Description
          id="outlined-error-helper-text"
          label="Discription"
          // helperText="Incorrect entry."
          name="overview"
          value={data.overview}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="file" onChange={handleChange} name='poster_path' value={data.poster_path} />
      </div>
      <div>

      <Button style={{color:'#000', borderColor:'#000', marginRight:'10px'}} type="submit" variant="outlined">Add Movie</Button>
      <Link to='/'>
      <Button variant="outlined" style={{color:'#000', borderColor:'#000'}}>Back</Button>
      </Link>
      </div>
      
        
    </Box>
    
    
  );
}