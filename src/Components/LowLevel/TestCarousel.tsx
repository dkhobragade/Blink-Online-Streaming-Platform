import { Box, Flex, Image, } from '@mantine/core';
import { useState } from 'react';
import FlexContainer from './FlexContainer';
import { List2 } from '../../constant';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { IconVolume, IconVolumeOff } from '@tabler/icons-react';

const TestCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(List2[0].image);
  const [currentVideo, setCurrentVideo] = useState(List2[0].video)

  const prevItem = (index: any) => {
    if (index === 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + List2.length) % List2.length);
    }
    else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % List2.length);
    }
  };

  const getDisplayedItems = () => {
    const totalItems = List2.length;
    if (totalItems <= 3) {
      return List2;
    }

    const itemsToShow = [];
    for (let i = 0; i < 3; i++) {
      itemsToShow.push(List2[(currentIndex + i) % totalItems]);
    }

    return itemsToShow;
  };

  const handleImageClick = (index: any) => {
    setBackgroundImage(List2[index - 1].image);
    setCurrentVideo(List2[index - 1].video)
  };

  const toggleSound = (id?: any) => {
    // const updatedList = carouselList.map((item) => ({
    //     ...item,
    //     play: id ? item.id !== id : true
    // }));
    // setCarouselList(updatedList);
  }

  const getInsideBox = () => {
    return (
      <Box className='inner_box zIndex' >
        <Flex>
          {getDisplayedItems().map((item, index) => (
            <Box
              key={index}
              className='innerMost_box'
            >
              <Image src={item.image} onClick={() => {
                prevItem(index)
                handleImageClick(item.id)
              }} />
            </Box>
          ))}
        </Flex>
          <FlexContainer alignItems="end" justifyContent="end" >
            <Box className='volumns zIndex'>
              {currentIndex ? (
                <IconVolumeOff className='pointer' color='white' onClick={() => toggleSound(currentIndex)} size={24} />
              ) : (
                <IconVolume className='pointer' color='white' onClick={() => toggleSound()} size={24} />
              )}
            </Box>
          </FlexContainer>
      </Box>
    );
  };

  return (
    <Box className='outer_box'>
      {/* <Image src={backgroundImage} className='img_box' /> */}
      <MediaPlayer loop muted={true} autoPlay={true} src={`${currentVideo}?vq=hd720`} >
        <MediaProvider >
        </MediaProvider>
      </MediaPlayer>
      <FlexContainer justifyContent="end" alignItems='end' >
        {getInsideBox()}
      </FlexContainer>
    </Box>
  );
};

export default TestCarousel;
