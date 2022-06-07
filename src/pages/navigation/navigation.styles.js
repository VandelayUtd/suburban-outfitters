import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid grey;

  @media screen and (max-width: 800px) {
    
    padding: 10px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    border-bottom: none;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  

  @media screen and (max-width: 800px) {
    margin-top: -16px;
    padding: 4px;
  }
`

export const Logo = styled.h1`
  white-space: nowrap;
  justify-content: flex-start;
  font-family: 'League Gothic', sans-serif;
  letter-spacing: 4px;
  color: black;
  padding: 0px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    margin-top: 4px;
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`
