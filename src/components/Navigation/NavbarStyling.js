import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as LinkS } from 'react-scroll';

/* $dark: #073636;
$secondary: #88F6DA;
$accent: #F4AC45;
$light: #F7FFFC; */

export const Nav = styled.nav`
  background: #2E7068;
  height:  80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  margin-top: -80px;
  z-index: 2;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  position: sticky;
`;

export const NavLogo = styled(LinkR)`
  color: #F7FFFC;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  align-self: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    color: #F7FFFC;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: #F7FFFC;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #F4AC45;
    height: 77px;
  }
`;