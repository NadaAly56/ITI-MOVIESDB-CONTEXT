import { createContext, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Movies from "../Components/Movies";
import AddMovie from "../Components/AddMovie";
import UpdateMovie from "../Components/UpdateMovie";
import MovieDetailes from "../Components/MovieDetailes";
export const MovieContext = createContext();
const MovieContextProvider = () => {
  const [movies, setMovies] = useState(null);
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/Data").then((res) => {
      setMovies(res.data);
    });
  }, []);

  const addMovie = async (data) => {
   await axios.post('http://localhost:3000/Data',data ).then(res => {
        setMovies((movie) => ([...movie,{...res.data}]))
    })
   }

   const updateMovie = async (id,data) => {
   await axios.put(`http://localhost:3000/Data/${id}`, data);
   axios.get("http://localhost:3000/Data").then((res) => {
      setMovies(res.data);
});
   }
 
  const reFun = (mId) => {
    setMovies((prev) => {
      setAlert(true);
      setTimeout(() => setAlert(false), 2000);

      return prev.filter((m) => m.id !== mId);
    });
  }
  return (
    <MovieContext.Provider value={{movies, reFun, addMovie, updateMovie}}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Movies></Movies>}></Route>
          <Route path="add" element={<AddMovie></AddMovie>}></Route>
          <Route path="detailes/:id" element={<MovieDetailes></MovieDetailes>}></Route>
          <Route path=":id" element={<UpdateMovie></UpdateMovie>}></Route>
          
        </Routes>
      </BrowserRouter>
    </MovieContext.Provider>
  );
};
export default MovieContextProvider;
