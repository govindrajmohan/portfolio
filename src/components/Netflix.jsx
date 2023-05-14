import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import MoviesCards from "./MoviesCards";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from 'react-redux'
import {getApiConfiguration,getGenreConfiguration} from "../store/homeSlice"
import "./Netflix.css";
import { Button } from "@mui/material";
import useFetch from "../hooks/useFetch";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


export const Netflix = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };


  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [loadingData,setLoadingData] = useState(false);

  // const[nowPlayinglading]
  // console.log("Now playing Movies", data.results)

//   const {url} = useSelector((state)=>
//     state.home
//   )
// const dispatch = useDispatch()
// useEffect(()=>{
//   setTimeout(()=>{
//   // console.log(url);

//   },2000)
// },[])

  // const getUpcomingMovies = async () => {
  //   await axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/upcoming?api_key=7e5122f42b3d47b2f9c1deaf4e1d2214&language=en-US&page=1"
  //     )
  //     .then((res) => {
  //       // console.log(res.data.results);
  //       setUpcoming(res.data.results);
  //       // console.log(res.data)
  //       // dispatch(getApiConfiguration(res.data.results))

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const getPopularMovies = async () => {
  //   await axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=7e5122f42b3d47b2f9c1deaf4e1d2214&language=en-US&page=1"
  //     )
  //     .then((res) => {
  //       // console.log(res.data.results);
  //       setPopular(res.data.results);
  //       // dispatch(getGenreConfiguration(res.data.results))
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const getTopRatedMovies = async () => {
  //   await axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=7e5122f42b3d47b2f9c1deaf4e1d2214&language=en-US&page=1"
  //     )
  //     .then((res) => {
  //       // console.log(res.data.results);
  //       setTopRated(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

 
 
  // const getNowPlayingMovies = async () => {
  //   await axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/now_playing?api_key=7e5122f42b3d47b2f9c1deaf4e1d2214&language=en-US&page=1"
  //     )
  //     .then((res) => {
  //       // console.log(res.data);
  //       setNowPlaying(res.data.results);
  //       // setLatest(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const {data:nowPlayMovies,nowPlayingLoading} = useFetch("movie/now_playing")

  const {data:popularMovies,popularLoading} = useFetch("movie/popular")

  const {data:upcomingMovies,upcomingLoading} = useFetch("movie/upcoming")

  const {data:topRatedMovies,topRatedLoading} = useFetch("movie/top_rated")

  useEffect(() => {
    window.scrollTo(0, 0);
    if (nowPlayMovies) setNowPlaying(nowPlayMovies.results);
    if (popularMovies) setPopular(popularMovies.results);
    if (topRatedMovies) setTopRated(topRatedMovies.results);
    if (upcomingMovies) setUpcoming(upcomingMovies.results);
  // setTimeout(()=>{
   
  //   if(nowPlayMovies=== undefined || nowPlayMovies === null){
  //     console.log("undefined");
      
  //   }
  //   else{
  
  //     setNowPlaying(nowPlayMovies?.results);
  //     setPopular(popularMovies?.results);
  //     setTopRated(topRatedMovies?.results);
  //     setUpcoming(upcomingMovies?.results);
  //   }
  
  
  // },1000)

    }, [nowPlayMovies,popularMovies,topRatedMovies,upcomingMovies]);
    console.log(nowPlayMovies);

  return (
    <>
      <Container className="hero-sec" maxWidth="xlg" >
        <Container className="hero-content">
        <h1>Unlimited movies, TV  <br/> shows, and more</h1>
        <h4>Watch anywhere. Cancel anytime.</h4>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        {/* <TextField id="outlined-basic" label="Email Address" variant="outlined" size="small"
         sx={{
          fontSize: '1rem',
          color:"#fff",
          padding: '5px 10px',
          '@media (max-width: 600px)': {
            fontSize: '0.5rem',
            padding: '3px 7px',
          },
          '@media (min-width: 601px) and (max-width: 960px)': {
            fontSize: '1.2rem',
            padding: '10px 15px',
          },
          '@media (min-width: 961px) and (max-width: 1280px)': {
            fontSize: '1.5rem',
            padding: '10px 15px',
          },
        }}
        /> */}
        <input type="text" placeholder="Email Address" className="email-input" />
        <Button variant="contained" 
         sx={{fontsize:{
          xs:"0.5rem",
          
          sm:"0.6rem", 
          md:"1.2rem",
          
          lg:"1.5rem",
        }, padding:{
          xs:"3px 7px",
          sm:"5px 10px",
          md:"4px 8px",
          lg:"10px 15px",
      
        }, backgroundColor:"#b50a0a"}}>Get Started</Button>
        </Container>
      </Container>

     
        <>      <Container maxWidth="xlg"  className="netflix-container">
       
          <h3 className="movie-title">Now Playing Movies</h3>
        {  <Carousel responsive={responsive}>
            {nowPlaying.map((val, index) => {
              return (
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <MoviesCards
                    title={val.title}
                    poster={val.poster_path}
                    overview={val.overview}
                    release_date={val.release_date}
                    rating={val.vote_average.toFixed(1)}

                    index={val.id}
                    loading={nowPlayingLoading}
                   
                    // mediaType={val.}
                  />
                </Grid>
              );
            })}
          </Carousel>
          || <Skeleton/>}
        </Container>
  
        <Container maxWidth="xlg"  className="netflix-container">
          <h3 className="movie-title">Upcoming Movies</h3>
          
          <Carousel responsive={responsive}>
            {upcoming.map((val, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <MoviesCards
                    title={val.title}
                    poster={val.poster_path}
                    overview={val.overview}
                    release_date={val.release_date}
                    rating={val.vote_average.toFixed(1)}

                    index={val.id}
                    loading={upcomingLoading}
  
                  />
                </Grid>
              );
            })}
          </Carousel>
        </Container>
  
        <Container maxWidth="xlg"  className="netflix-container">
          <h3 className="movie-title">Popular Movies</h3>
          <Carousel responsive={responsive}>
            {popular.map((val, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <MoviesCards
                    title={val.title}
                    poster={val.poster_path}
                    overview={val.overview}
                    release_date={val.release_date}
                    rating={val.vote_average.toFixed(1)}

                    index={val.id}
                    loading={popularLoading}
                  />
                </Grid>
              );
            })}
          </Carousel>
        </Container>
        <Container maxWidth="xlg"  className="netflix-container">
          <h3 className="movie-title">Top Rated Movies</h3>
          <Carousel responsive={responsive}>
            {topRated.map((val, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} lg={3}>
                  <MoviesCards
                    title={val.title}
                    poster={val.poster_path}
                    overview={val.overview}
                    release_date={val.release_date}
                    rating={val.vote_average.toFixed(1)}
                    index={val.id}
                    loading={topRatedLoading}
                  />
                </Grid>
              );
            })}
          </Carousel>
        </Container>
  </>
      
    </>
  );
};

export default Netflix;
