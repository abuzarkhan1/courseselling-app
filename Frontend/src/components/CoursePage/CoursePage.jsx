import React,{useState} from 'react'
import { Box, Grid, Heading, VStack, Text } from '@chakra-ui/react';
import vd from '../../assets/videos/1.mp4';

const CoursePage = () => {
    const [lectureNumber  , setlectureNumber ]= useState(0);
    const lectures = [
        {
          _id: 'id no',
          title: 'sample',
          description: 'sample',
          video: {
            url: 'abuzar.com',
          },
        },
        {
          _id: 'id no',
          title: 'sample2',
          description: 'sample2',
          video: {
            url: 'abuzar.com',
          },
        },
        {
          _id: 'id no',
          title: 'sample3',
          description: 'sample3',
          video: {
            url: 'abuzar.com',
          },
        },
      ];
  return (
    <Grid minH={'90vh'} templateColumns={['1fr', '3fr 1fr']}>
    <Box>
      <video
        width={'100%'}
        controls
        controlsList="nodwonload  noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={vd}
      ></video>
      <Heading
        m="4"
        children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
      />
      <Heading m="4" children={lectures[lectureNumber].description} />
      <Text
        m="4"
        children="u will right description here fo your lecture videos"
      />
    </Box>
    <VStack>
      {lectures.map((element, index) => (
        <button
        onClick={()=>setlectureNumber(index)}
          key={element._id}
          style={{
            width: '100%',
            padding: '1rem',
            textAlign: 'center',
            margin: 0,
            borderBottom: '1px solid rgba(0,0,0,0.2)',
          }}
        >
          <Text noOfLines={1}>
            #{index + 1} {element.title}
          </Text>
        </button>
      ))}
    </VStack>
  </Grid>
  )
}

export default CoursePage;