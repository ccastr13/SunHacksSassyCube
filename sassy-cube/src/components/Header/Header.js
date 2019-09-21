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
          <HeaderLink to='/'>Khannur Sewnyay</HeaderLink>
          <HeaderLink to='/'>Sinteauh Katzrowe</HeaderLink>
          <HeaderLink to='/'>Reeee-anin Salkayduh</HeaderLink>
        </HeaderContent>
      </HeaderWrapper>
    );
  }
}

export default Header;