import React from 'react'

const Projects = () => {
    return (
        <ProjectsContainer>
         <ProjectH1>Build Real Projects</ProjectH1>
         <ProjectsWrapper>
          <ProjectThird>
            <ProjectImage src={Project1}/>
            <ProjectH2>Project1</ProjectH2>
            <ProjectP>About project 1...</ProjectP>
          </ProjectThird>
          <ProjectThird>
            <ProjectImage src={Project2}/>
            <ProjectH2>Project2</ProjectH2>
            <ProjectP>About Project 2...</ProjectP>
          </ProjectThird>
          <ProjectThird>
            <ProjectImage src={Project3}/>
            <ProjectH2>Project3</ProjectH2>
            <ProjectP>About Project 3...</ProjectP>
          </ProjectThird>
         </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects