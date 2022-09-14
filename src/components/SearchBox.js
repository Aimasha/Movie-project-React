import { Component } from "react";

class SearchBox extends Component{
    constructor(props){
        super();
        this.state ={
    
        }
    }
    render(){
        return (
            <div className="inp-back" >
              <input 
              className="inpt"
              placeholder="Type to search a movie..." 
              onChange={(event) => this.props.setSearchValue(event.target.value)}
              type="text" />
            </div>
        )
    }
}

export default SearchBox ;