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
          <HeaderLink to='/'>Connor Sonnier</HeaderLink>
          <HeaderLink to='/'>Cynthia Castro</HeaderLink>
          <HeaderLink to='/'>Rhiannon Salceda</HeaderLink>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

export default Header;