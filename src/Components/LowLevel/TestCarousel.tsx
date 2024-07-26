import { Box, Image, } from '@mantine/core';
import { useEffect, useState } from 'react';
import FlexContainer from './FlexContainer';
import { List2 } from '../../constant';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { IconPointFilled, IconVolume, IconVolumeOff } from '@tabler/icons-react';
import ElemsRow from './ElemsRow';
import Text from './Text';
import Button from './Button';

interface VideoStatus {
  video: string,
  sound: boolean,
  titleImg: string,
  year: string,
  info: string,
  genre: string,
}

export default function TestCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentState, setCurrentState] = useState<VideoStatus>({} as VideoStatus)
  const [showControls, setShowControls] = useState<boolean>(false)

  useEffect(() => {
    setCurrentState({
      video: List2[0].video,
      sound: true,
      titleImg: List2[0].titleImg,
      year: List2[0].year,
      info: List2[0].info,
      genre: List2[0].genre,
    })
  }, [])

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  })

  const handleFullscreenChange = () => {
    if (document.fullscreenElement === document.getElementById('videoRef')) {
      setShowControls(true);
    } else {
      setShowControls(false);
    }
  };

  const prevItem = (index: number) => {
    if (index === 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + List2.length) % List2.length);
    }
    else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % List2.length);
    }
  };

  const getDisplayedItems = () => {
    const itemsToShow = [];
    const totalItems = List2.length;

    for (let i = 0; i < 3; i++) {
      itemsToShow.push(List2[(currentIndex + i) % totalItems]);
    }

    return itemsToShow;
  };

  const handleImageClick = (index: string) => {
    const item = List2[Number(index) - 1];
    setCurrentState({
      video: item.video,
      sound: item.play,
      titleImg: item.titleImg,
      year: item.year,
      info: item.info,
      genre: item.genre,
    });
  };

  const toggleSound = () => {
    setCurrentState((prevState) => ({ ...prevState, sound: !prevState.sound }));
  }

  const renderVolumeIcons = () => {
    return <Box className='volumns zIndex'>
      {currentState.sound ? (
        <IconVolumeOff className='pointer' color='white' onClick={toggleSound} size={24} />
      ) : (
        <IconVolume className='pointer' color='white' onClick={toggleSound} size={24} />
      )}
    </Box>
  }

  const handleWatchNow = async () => {
    const videoElement = document.getElementById('videoRef');

    if (videoElement) {
      try {
        if (videoElement.requestFullscreen) {
          await videoElement.requestFullscreen();
          setCurrentState((prev) => ({ ...prev, sound: false }))
        }
      } catch (error) {
        console.error('Failed to enter fullscreen:', error);
      }
    }
  }



  const getInsideBox = () => {
    return (
      <Box className='inner_box zIndex'>
        <ElemsRow numCols={2} padding={10} >
          <FlexContainer justifyContent='start' alignItems='start'>
            <Box w='100%' h={250}>
              <ElemsRow>
                <Box>
                  <Image w={200} h={100} style={{ objectFit: 'contain' }} src={currentState.titleImg} />
                </Box>
                <Box w={40}>
                  <ElemsRow numCols={2}>
                    <IconPointFilled fill='white' />
                    <Text text={currentState.year} />
                  </ElemsRow>
                </Box>
                <Text text={currentState.info} />
                <Text text={currentState.genre?.split(',').join(' | ')} />
                <Button border={false} text='Watch Now !' width={200} bgColor='white' textColor='black' onClick={handleWatchNow} />
              </ElemsRow>
            </Box>
          </FlexContainer>
          <FlexContainer alignItems="end" justifyContent="end" >
            {renderVolumeIcons()}
            <FlexContainer gap='0' alignItems="end" justifyContent="end">
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
            </FlexContainer>
          </FlexContainer>
        </ElemsRow>
      </Box>
    );
  };

  return (
    <Box className='outer_box'>
      <MediaPlayer id='videoRef' loop muted={currentState.sound} controls={showControls} autoPlay={true} src={`${currentState.video}?vq=1080p`} >
        <MediaProvider >
        </MediaProvider>
      </MediaPlayer>
      <FlexContainer justifyContent="end" alignItems='end' >
        {getInsideBox()}
      </FlexContainer>
    </Box>
  );
};
