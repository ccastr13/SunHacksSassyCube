import React, {Component} from 'react';
import {
  HeaderWrapper, 
  HeaderTitle, 
  HeaderContent,
  HeaderLink
} from './Header.styles';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderTitle to='/'>
          Sassy Cube
        </HeaderTitle>


        <HeaderContent>
          <HeaderLink to='/'>Home</HeaderLink>
          <HeaderLink to='/'>Name 1</HeaderLink>
          <HeaderLink to='/'>Name 2</HeaderLink>
          <HeaderLink to='/'>Name 3</HeaderLink>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

export default Header;