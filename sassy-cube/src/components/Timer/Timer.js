import React, { Component } from 'react';
import styled from 'styled-components';
import Speech from 'speak-tts';

const TimerWrapper = styled.div`
  font-size: 48px;
`;

var triggerSpeak = (message) => {
    const speech = new Speech() // will throw an exception if not browser supported
    speech.speak({
        text: message, 
    }).then(() => {
        console.log("Success !")
    }).catch(e => {
        console.error("An error occurred :", e)
    })
}

class Timer extends Component {
    
    constructor (props) {
      super(props)
      this.state = {count: 1}
    }

    componentWillUnmount () {
      clearInterval(this.timer)
    }

    tick () {
      if(this.state.count % 10 === 0) {
        triggerSpeak('Oh... You couldn\'t solve me? ... How useless.')
      }
      this.setState({count: (this.state.count + 1)})
    }

    startTimer () {
      clearInterval(this.timer)
      this.timer = setInterval(this.tick.bind(this), 1000)
    }
    stopTimer () {
      clearInterval(this.timer)
    }
    componentDidMount() {
      this.startTimer();
    }

    render () {
      return (
        <TimerWrapper>
          <h1>{this.state.count}</h1>
        </TimerWrapper>
      )
    }
  }

export default Timer;
