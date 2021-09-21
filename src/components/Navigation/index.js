import React from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarStyling';

const Navbar = ({toggle}) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>Amanda Heideman</NavLogo>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks 
                to="home" 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                Home
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks 
                to="about" 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-79}
              >
                About
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks 
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-78}
                >
                Projects
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks 
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-77}
                >
                Contact
              </NavLinks>
            </NavItem>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
