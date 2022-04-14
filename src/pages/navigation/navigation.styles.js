import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid grey;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 35%;
`
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

export const Logo = styled.h1`
  white-space: nowrap;
  justify-content: flex-start;
  font-family: 'League Gothic', sans-serif;
  letter-spacing: 4px;
  color: black
`
