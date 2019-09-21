import React, {Component} from 'react';
import CubeContainer from '../CubeContainer';
import '../../Voice.js';
import Timer from '../Timer/timer.js';
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