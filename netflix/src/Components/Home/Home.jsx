import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios'

const apiKey = "e9dc58962c00b95b9dd32007357cfb02"
const url = "https://api.themoviedb.org/3"
const imgUrl="https://image.tmdb.org/t/p/original"
const upcoming="upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";


const Card=({img})=>
    <img className='card' src={img} alt="cover"/>;
 
    const Row = ({ title, arr=[
      ],
    }) => (
      
        <div className="row">
            <h2>{title}</h2>
    
            <div>
                 {
                  arr.map((item,index)=>
                  (
                    <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
                  
                  ))
                 }
            </div>
        </div>
    );
const Home = () => {
  const [upcomingMovies,setUpcomingMovies]=useState([]);
  const [nowPlayingMovies,setnowPlayingMovies]=useState([]);
  const [popularMovies,setpopularMovies]=useState([]);
  const [topRatedMovies,settopRatedMovies]=useState([]);

  
  useEffect(()=>
  {
      const fetchUpcoming=async()=>
      {
        const {data:{results}} =await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
        setUpcomingMovies(results)
      
      };
      const fetchnowPlaying=async()=>
      {
        const {data:{results}} =await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`)
        setnowPlayingMovies(results)
      
      };
      const fetchpopular=async()=>
      {
        const {data:{results}} =await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
        setpopularMovies(results)
      
      };
      const fetchtopRated=async()=>
      {
        const {data:{results}} =await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`)
        settopRatedMovies(results)

      };
      
      fetchUpcoming();
      fetchnowPlaying();
      fetchpopular();
      fetchtopRated();
  },[])
  return (
    <section className='home'>
      <div className='banner' style={{
        backgroundImage:popularMovies[0] ? `url(${imgUrl}/${popularMovies[0].poster_path})`: "rgb(16, 16, 16)"
      }}>
       
      </div>
      <Row title={"Upcoming "} arr={upcomingMovies}/>
      <Row title={"Now Playing "} arr={nowPlayingMovies}/>
      <Row title={"Popular "} arr={popularMovies}/>
      <Row title={"Top Rated "} arr={topRatedMovies}/>
      
      
    </section>
  )
}

export default Home