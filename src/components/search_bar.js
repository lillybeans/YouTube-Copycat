import React, {Component} from 'react'; //need this for all files

class SearchBar extends Component{
  constructor(props){
    super(props); //call parent - Component's constructor
    this.state={term:'starting value'}; //initialize state, term is the search term, begin empty
  }
  render(){  //mandatory render method for class based component
    return(
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}/>
      </div>
    );
  }

  onInputChange(term){
    this.setState({term}); //{term} is abbrev syntax for {term:term};
    this.props.onSearchTermChange(term); //call callback function that's passed to us
  }

}

export default SearchBar;
