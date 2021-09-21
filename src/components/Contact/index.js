import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaArtstation } from 'react-icons/fa';
import {
  ContactContainer,
  ContactTitle,
  ContactSection,
  ContactInfo,
  Email,
  SocialIcons,
  SocialIconLink
} from './ContactStyling';

const Contact = () => {

  return (
    <>
      <ContactContainer id="contact">
        <ContactSection>
          <ContactTitle>Contact me </ContactTitle>
          <div>
          <ContactInfo>Email: <Email href="mailto:heideman.amanda@gmail.com" target="_blank">heideman.amanda@gmail.com</Email></ContactInfo>
          <ContactInfo>Phone: 0709-466 079</ContactInfo>
          </div>

          <SocialIcons>
                <SocialIconLink href="//www.linkedin.com/in/amanda-heideman-a443181b9/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>

                <SocialIconLink href="//www.github.com/AmandaHeideman" target="_blank" aria-label="GitHub">
                  <FaGithub />
                </SocialIconLink>

                <SocialIconLink href="//www.amandaheideman.artstation.com/" target="_blank" aria-label="ArtStation">
                  <FaArtstation />
                </SocialIconLink>

                <SocialIconLink href="//www.instagram.com/amandaheideman/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink href="//www.facebook.com/amanda.heideman/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
              </SocialIcons>  
        </ContactSection>
      </ContactContainer>
    </>
  )
}

export default Contact
