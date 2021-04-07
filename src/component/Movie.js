import React,{useState} from 'react';
import './Style.css';

function Movie() {
         //states - input query movies //
         const [query,setQuery] = useState('');
         //state for movies and update this state //
         const [movies, setMovies] = useState([]);
    const Movie = async (e) =>{
   
        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=5d4a385b4e941cfcdb646c0309baaf8e&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const res = await fetch(url);
            const data  = await res.json();
            console.log(data.results);
            setMovies(data.results);
        }catch(err){
            console.log(err)
        }
        console.log("submitt");

    }

    return (
    <>
       <form className="form" onSubmit={Movie}>
           <label className="lable" htmlFor="query" ><a href="/">Search Movie</a></label>
           <input 
              className="input" 
                type="text" 
                name="query"
                placeholder="i.e. Jurassic Park"
                value={query} onChange={(e) => setQuery(e.target.value)}
           ></input>
            <button className="button" type="submit"> SEARCH</button>
            <div className="textCenter">
                <h2>you can find any film you need </h2>
            </div>
       </form>
       <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                    <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p>
                            <i class="fas fa-star"></i>
                            <small className="rate">RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>

                     </div>              
                     </div>
           ))}
       </div>
    </>
    )
}

export default Movie
