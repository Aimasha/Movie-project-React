import React, { Component } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import FilterBox from "./components/FilterBox"
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      favorites: [],
      filteredValue: " ",
      searchValue: " ",
    };
  }
  componentDidMount() {
    this.fetchMovies();

    const movieFavorites = JSON.parse(
      localStorage.getItem("local-movie-app-favorite")
    )
    if(movieFavorites){
      this.setState({favorites:movieFavorites})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.searchValue !== prevState.searchValue)|| (prevState.filteredValue !==  this.state.filteredValue)) {
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const url = `http://www.omdbapi.com?s=${this.state.searchValue}&type=${this.state.filteredValue}&apikey=bf3b1333`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          this.setState({
            movies: data.Search,
          });
        }
      });
  };

  setSearchValue = (value) => {
    this.setState({ searchValue: value });
  };
  addFavoriteMovie = (movie) => {
    const newFavoritesArray = [...this.state.favorites,movie]
    this.setState({
      favorites:newFavoritesArray
    })
    
    this.saveToLocalStorage(newFavoritesArray)
    
  }
 
  saveToLocalStorage = (items) => {
    localStorage.setItem("local-movie-app-favorite",JSON.stringify(items))
  }

  removeFavoriteMovie = (movie) => {
     const newFavoriteList = this.state.favorites.filter(
       (favorite) => favorite.imdbID !== movie.imdbID 
       )
       this.setState({
        favorites: newFavoriteList
       })
       this.saveToLocalStorage(newFavoriteList)
  }
  
     setFilteredValue = (value) => {
      this.setState({filteredValue: value})
      }
     
  render() {
    return (
      <div className="container">
  
         <div className="row justify-content-md-center mb-3">
           <SearchBox setSearchValue={this.setSearchValue}/>
         </div>

         <FilterBox
         setFilterValue = {this.setFilteredValue}
         />
        <div className="row">
          <MovieList
           movies={this.state.movies} 
           btnText = "Add to Favorite"
           btnClass= "btn-success"
           handleFavoriteMovie ={this.addFavoriteMovie}
          />
        </div>

        
         <h3 className="favorite"> Favorite </h3>
        

         <div className="row">
         <MovieList
           movies={this.state.favorites} 
           btnText="Remove"
           btnClass= "btn-danger"
           handleFavoriteMovie ={this.removeFavoriteMovie}
          />
         </div>
      </div>
    );
  }
}
export default App;
