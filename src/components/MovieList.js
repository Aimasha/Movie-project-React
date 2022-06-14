import React, { Component } from "react";

class MovieList extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
       <>
       {
           this.props.movies.map((movie,index) =>(
              <div className='col-md-3 mb-4' key={index}>
                <div className="card">
                  <img
                   src={movie.Poster === "N/A" ? 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' : movie.Poster} 
                   className='card-img-top'
                   />
                </div> 

                <div className="card-body">
                   <p>{movie.Title} - Year:{movie.Year}</p>
                   <button onClick={ ()=> this.props.handleFavoriteMovie(movie)} className={`btn btn-sm ${this.props.btnClass}` }>{this.props.btnText}</button>
                   
                </div>
              </div>
            
           ))
       }
       </>
    );
  }
}

export default MovieList;

