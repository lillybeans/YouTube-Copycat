class App extends Component{ //const means App won't change
    constructor(props){
      super(props); //always call parent constructor

      this.state{videos:[]};

      YTSearch({key:API_KEY,term:'surfboards'},(videos)=>{ //data is the response
        this.setState({videos}); //if state key name equals argument, we can do this instead of videos:videos
      });
    }

    render(){ //need to wrap html inside (); if you want to start on next line.
      return(
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos}/> /* passing data from parent 'App' to child 'VideoList' */
      </div>
      ); //this is jsx, babel translates this into js
    }
}
