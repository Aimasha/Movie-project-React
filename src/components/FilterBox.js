import React, { Component } from "react"

class FilterBox extends Component {
    render(){
        return(
            <>
         <select 
         className="form-control-sm "
         onChange={(event) => this.props.setFilterValue(event.target.value)}
         >

             <option defaultValue={" "}>Choose type</option>
             <option value="movie">Movie</option>
             <option value="series">Series</option>
             <option value="episodes">Episodes</option>
             <option value="year"> Year</option>
 
         </select>
            </>
        )
    }
}

export default FilterBox;