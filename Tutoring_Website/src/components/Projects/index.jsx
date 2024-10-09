import React, {useRef} from 'react'

import {motion, useScroll, useTransform} from 'framer-motion';

const Projects = () => {
    return (
      <Carousel>
        <ContentContainer>
          <Images>
            <ImageItem>
              <ImageContainer>
                <Img src={img1} alt={alt}></Img>
              </ImageContainer>
            </ImageItem>
          </Images>
        </ContentContainer>
      </Carousel>
    )
}

export default Projects