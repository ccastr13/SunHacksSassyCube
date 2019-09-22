import React, { Component } from 'react';
import styled from 'styled-components';
import Speech from 'speak-tts';
import {
  mild, medium, spicy
} from '../../constants';

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
      this.state = {
        count: 1, 
        mildInit: mild,
        medInit: medium,
        spicyInit: spicy
      }
    }

    componentWillUnmount () {
      clearInterval(this.timer)
    }

    tick () {
      // if(this.state.count % 10 === 0) {
      //   triggerSpeak('Oh... You couldn\'t solve me? ... How useless.') //RETURN
      // }
      if(this.state.count % 15 === 0) {
        this.pickMessage(this.state.count)
      }
      
      this.setState({count: (this.state.count + 1)})
    }

    pickMessage() {
      let randomIndex = 0
      if(this.state.count <= 90) {
        //pull from mild
        randomIndex = Math.floor(Math.random() * this.state.mildInit.length)
        triggerSpeak(this.state.mildInit[randomIndex])

        const tempArray = this.state.mildInit
        tempArray.splice(randomIndex, 1)


        this.setState({
          mildInit: tempArray
        })

       // console.log(this.state.mildInit)
      }

      else if(this.state.count <= 180) {
        //pull from medium
        randomIndex = Math.floor(Math.random() * this.state.medInit.length)
        triggerSpeak(this.state.medInit[randomIndex])

        const tempArray = this.state.medInit
        tempArray.splice(randomIndex, 1)


        this.setState({
          medInit: tempArray
        })

       // console.log(this.state.medInit)
      }

      else if(this.state.count > 180) {

        if(this.state.spicyInit.length === 0)
          this.setState({
            spicyInit: spicy
          })
          
        //pull from spicy
        randomIndex = Math.floor(Math.random() * this.state.spicyInit.length)
        triggerSpeak(this.state.spicyInit[randomIndex])

        const tempArray = this.state.spicyInit
        tempArray.splice(randomIndex, 1)


        this.setState({
          spicyInit: tempArray
        })
        
       // console.log(this.state.spicyInit)
      }

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
