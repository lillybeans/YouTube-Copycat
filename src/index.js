import React, {Component} from 'react'; //react is the folder under node_modules
import ReactDOM from 'react-dom'; //this lib is used to interact with actual DOM
import YTSearch from 'youtube-api-search';

//when importing user defined js files, we need to specify path reference
import SearchBar from './components/search_bar'; //no extension needed
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCFlvXJ64x9HE47zkS8q06xsP5ly1-snIg'; //youtube API key

//1. Create a new component, this component should produce some HTML

class App extends Component{ //const means App won't change
    constructor(props){
      super(props);
      this.state={
        videos:[],
        selectedVideo: null
      };

      //this.videoSearch('surfboards'); //initial search
    }

    videoSearch(term){ //function which we will pass down to SearchBar and wait for its callback
      YTSearch({key:API_KEY,term:term},(videos)=>{ //search as soon as we instantiate App
        this.setState({ //whenever setState is called, App & App.children will re-render!
          videos: videos,
          selectedVideo: videos[0] //first selected video by default will be first search result
        }); //if state key name == argument name, we can do this instead of videos:videos
      });
    }

    render(){ //need to wrap html inside (); if you want to start on next line.
      return(
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
      ); //this is jsx, babel translates this into js
    }
}



//2. Take component's generated HTML and display it on page (in DOM)
ReactDOM.render(<App/>, document.querySelector('.container')); //params: instance of class App, target container
