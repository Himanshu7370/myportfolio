import React from 'react'
import Navbar from '../components/Navbar'

import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ProjectAdd from '../components/ProjectAdd'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text=" Plese got to  GIT HUB link to see my work." />
      <ProjectAdd/>
      <Footer/>
    </div>
  )
}

export default Project
