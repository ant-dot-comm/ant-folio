import React, { useContext } from 'react';
import classNames from "classnames"

import SiteContext from "../../SiteContext"
import { AboutContent, Resume } from "../../components"

import { Button, Dropdown } from "semantic-ui-react"

export function About(props) {
  const {
    className,
  } = props

  const aboutClasses = classNames(
    className, 
    "section-about",
  )
    
  const { modal, setModalOpen, handleModalContent, setTheme } = useContext(SiteContext)

  const handleAbout = () => {
    setModalOpen(!modal)
    handleModalContent(<AboutContent />)
  }
  
  const handleResume = () => {
    setModalOpen(!modal)
    handleModalContent(<Resume />)
  }

  return (
      <div className={aboutClasses}>
        <div className="about-buttons">
          <Button className="primary large" onClick={() => handleAbout()}>About</Button>
          <Button className="basic primary large" onClick={() => handleResume()}>Resume</Button>
        </div>
      </div>
  );
}