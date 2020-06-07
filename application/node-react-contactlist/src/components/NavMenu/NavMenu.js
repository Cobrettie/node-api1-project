import React from 'react';
import { Link } from 'react-router-dom'
import { NavMenuContainerDiv, StyledNav, StyledLink } from './NavMenuStyles';

export default function NavMenu() {
  return (
    <NavMenuContainerDiv>
      <StyledNav>
        <StyledLink to='/'>Your Contacts</StyledLink>
        <StyledLink to='/addcontact'>Add Contact</StyledLink>
      </StyledNav>
    </NavMenuContainerDiv>
  )
}