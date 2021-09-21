import React from 'react'
import {
  MenuContainer,
  Icon,
  CloseIcon,
  MenuWrapper,
  Menu,
  MenuLink,
} from './MenuStyling';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
      <MenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>

        <MenuWrapper>
          <Menu>
            <MenuLink to="home" onClick={toggle}>
              Home
            </MenuLink>

            <MenuLink to="about" onClick={toggle}>
              About
            </MenuLink>

            <MenuLink to="projects" onClick={toggle}>
              Projects
            </MenuLink>

            <MenuLink to="contact" onClick={toggle}>
              Contact
            </MenuLink>
          </Menu>
        </MenuWrapper>
      </MenuContainer>
    </>
  )
}

export default Sidebar
