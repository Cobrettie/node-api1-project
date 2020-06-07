import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavMenuContainerDiv = styled.div`
  border-bottom: 2px solid grey;
  padding: 20px 0;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 10px;
  color: #373737;
  font-size: 16px;
  font-weight: 500;
`;