import React from 'react';
import { getData } from '../utils/api';
import FourCards from './FourCards'
import FullScreen from './FullScreen'
import Solutions from './Solutions'
import ProgressBar from './ProgressBar'

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      solutions: false,
      progress: 0,
      questionNumber: 1,
      data: null,
      answers: []
    };

    this.handleAnswer = this.handleAnswer.bind(this)
  }
  componentDidMount() {
    getData()
      .then((data) => {
        setTimeout(() => {
          this.setState({
            data,
            loading: false
          });
        }, 1000)
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }
  handleAnswer(value) {
    let nextStep = null
    let solutions = null
    this.state.data.answers.forEach((answer) => {
      if (answer.products) {
        nextStep = answer
        solutions = true
      } else if (answer.answer === value.toLowerCase()) {
        nextStep = answer
      }
    })
    this.setState({
      data: nextStep,
      solutions,
      progress: (this.state.data.nodeDepth / 4) * 100,
      questionNumber: this.state.questionNumber + 1,
      answers: this.state.answers.concat(nextStep.answer)
    })
  }
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    }
    if (this.state.solutions) {
      return (
        <div className='container'>
          <ProgressBar
            progress={this.state.progress}
            answers={this.state.answers}
          />
          <Solutions
            data={this.state.data}
            questionNumber={this.state.questionNumber}
          />
        </div>
      )
    }
    if (this.state.data.layout === 'fourCards') {
      return (
        <div className='container'>
          <ProgressBar progress={this.state.progress} />
          <FourCards
            data={this.state.data}
            handleAnswer={this.handleAnswer}
            questionNumber={this.state.questionNumber}
          />
        </div>
      )
    }
    if (this.state.data.layout === 'fullScreen') {
      return (
        <div className='container'>
          <FullScreen
            data={this.state.data}
            handleAnswer={this.handleAnswer}
            questionNumber={this.state.questionNumber}
          >
            <ProgressBar progress={this.state.progress} answers={this.state.answers} />
          </FullScreen>
        </div>
      )
    }

  }
}

