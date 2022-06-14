import { Component } from "react";

class SearchBox extends Component{
    constructor(props){
        super();
        this.state ={
    
        }
    }
    render(){
        return (
            <div >
              <input 
              placeholder="Type to search..." 
              onChange={(event) => this.props.setSearchValue(event.target.value)}
              type="text" />
            </div>
        )
    }
}

export default SearchBox ;