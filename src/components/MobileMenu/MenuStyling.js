import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { Link } from 'react-scroll';

/* $dark: #073636;
$secondary: #88F6DA;
$accent: #F4AC45;
$light: #F7FFFC; */

export const MenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #073636;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color:#F7FFFC;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MenuWrapper = styled.div`
  color: #F7FFFC;
`;

export const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`;

export const MenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #F7FFFC;
  cursor: pointer;

  &:hover {
    color: #88F6DA;
    transition: 0.2 ease-in-out;
  }
`;
