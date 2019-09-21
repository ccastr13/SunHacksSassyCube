import React, {Component} from 'react';
import CubeContainer from '../CubeContainer';
import Timer from '../Timer/Timer';
import {
  HomeWrapper
} from './Home.styles';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <CubeContainer />
        <Timer/>
      </HomeWrapper>
    );
  }
}

export default Home;