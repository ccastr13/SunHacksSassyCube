import React, {Component} from 'react';
import CubeContainer from '../CubeContainer';

import {
  HomeWrapper
} from './Home.styles';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <CubeContainer />
      </HomeWrapper>
    );
  }
}

export default Home;