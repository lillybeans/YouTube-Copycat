import React from 'react';
import VideoListItem from './video_list_item';

//functional component, since we don't need to record user actions on video list
const VideoList=(props)=>{
  const videoItems = props.videos.map((video)=>{ //will generate a list of <VideoListItem/>
    return(
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    )
  });

  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
}

export default VideoList;
