import { Box, Flex, Image, Button } from '@mantine/core';
import React, { useState } from 'react';
import img from '../../Assets/LoginBg.jpg';
import FlexContainer from './FlexContainer';
import { List2 } from '../../constant';

const TestCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState(List2[0].image);

  const prevItem = (index:any) => {
    if(index===0){
      setCurrentIndex((prevIndex) => (prevIndex - 1 + List2.length) % List2.length);
    }
    else{
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

  const handleImageClick = (index:any) => {
    console.log(index)
    setBackgroundImage(List2[index].image);
  };


  const getInsideBox = () => {
    return (
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
        <Box style={{ width: '100%' }}>
          <Flex>
            {getDisplayedItems().map((item, index) => (
              <Box
                key={index}
                style={{ cursor:'pointer',overflow: 'hidden', borderRadius: '10px', padding: '5px', width: '8rem', height: '5rem', backgroundColor: 'blue', margin: '0 5px' }}
                onClick={()=>{
                  prevItem(index)
                  handleImageClick(item.id)
                }}
              >
                <Image src={item.image} />
              </Box>
            ))}
          </Flex>
        </Box>
      </Box>
    );
  };

  return (
    <Box style={{ width: '100%', height: '35rem', overflow: 'hidden', position: 'relative' }}>
      <Image src={backgroundImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <FlexContainer>
        {getInsideBox()}
      </FlexContainer>
    </Box>
  );
};

export default TestCarousel;
