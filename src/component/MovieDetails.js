import React from 'react'
import {Link} from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';

function MovieDetails(props) {
    
    const movie= props.data.find(el=>el.name===props.match.params.name)
    return (
        <div >
            <div className="white-box">
                <Link to='/' >
                    <div className="flech">🢀</div>
                    
                </Link>
                        <img className='img-details' src={movie.image} alt="movie-poster"></img>
                        <div className="List">
                            <h3 className="movie-name"> {movie.name} </h3>
                            <hr/>
                            <p>{movie.description}</p>
                            
                            <h4><StarRatingComponent value={movie.rating}/></h4>
                        </div>
                        
                        <h2>Watch Trailer</h2>
                        <iframe className='trailer'
                                src={movie.trailer} title='movie-name'>
                        </iframe>
            </div>
        </div>
    )
}

export default MovieDetails