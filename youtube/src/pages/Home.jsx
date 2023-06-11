import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import styled from 'styled-components';
import {axiosInst} from "../Config"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap : wrap;
`;

const Home = ({type}) => {

  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    const fetchVideos = async()=>{
      const res =await axiosInst.get(`/videos/${type}`)
      setVideos(res.data)
    }
    fetchVideos();
  },[type])
  return (
    <Container>
        {videos.map(video=>(
          <Card key={video._id} video={video} />
        ))}
    </Container>
  )
}

export default Home