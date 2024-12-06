import React, {useState} from 'react'
import { ReactTyped } from "react-typed";
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight, Button } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
    <HeroContainer>
     <HeroBg>
      <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
     </HeroBg>
     <HeroContent>
      <HeroH1>
        <ReactTyped
        strings={["Start your programming journey with CodeHead!"]}
        typeSpeed={30}
        />
      </HeroH1>
     </HeroContent>
     <HeroBtnWrapper>
      <Button to="/contact" onMouseEnter={onHover} onMouseLeave={onHover}>Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
     </HeroBtnWrapper>
    </HeroContainer>
    )
}

export default HeroSection