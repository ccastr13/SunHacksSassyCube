import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #343a40;
  color: white;
  height: 80px;
  padding: 0 20px;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled(Link)`
  font-size: 1.5em;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:visited {
    color: white;
  }

  &:hover {
    color: #9c9c9c;
    text-decoration: bold;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLink = styled(Link)`
  padding: 0 20px;
  color: white;
  text-decoration: none;

  &:visited {
    color: white;
  }

  &:hover {
    color: #9c9c9c;
  }
`;

export const SignIn = styled.div`
  padding: 0 20px;

  &:hover {
    color: #9c9c9c;
    text-decoration: bold;
  }
`;
