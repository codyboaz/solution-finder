import React from 'react';
import { getData } from '../utils/api';
import { Line } from 'rc-progress'

function ProgressBar({ progress }) {
  return (
    <Line percent={progress} strokeWidth='1' strokeColor='#EB3300' trailWidth='0.25' trailColor='#000' />
  )
}


class FullScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imgUrl: null
    }
  }
  componentDidMount() {
    this.setState({
      imgUrl: this.props.data.answers[0].imageUrl
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.data.answers[0].imageUrl !== this.props.data.answers[0].imageUrl) {
      this.setState({
        imgUrl: this.props.data.answers[0].imageUrl
      })
    }
  }

  handleMouseOver(url) {
    this.setState({
      imgUrl: url
    })
  }

  render() {
    const { question, answers } = this.props.data
    const handleAnswer = this.props.handleAnswer
    return (
      <div>
        <div className='header'>
          <span className='question-number'>{`0${this.props.questionNumber}`}</span>
          <h1>{question}</h1>
        </div>

        <img src={this.state.imgUrl} className='fullscreen-img' />
        <ul className='card-holder'>
          {answers &&
            answers.map(answer => (
              <li key={answer.answer}>
                <button
                  className='center-text'
                  onClick={handleAnswer}
                  onMouseOver={() => this.handleMouseOver(answer.imageUrl)}
                  onFocus={() => this.handleMouseOver(answer.imageUrl)}
                >
                  {answer.answer}
                </button>
              </li>
            )
            )}
        </ul>
      </div>
    )
  }

}

class Solutions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { question, products } = this.props.data
    return (
      <React.Fragment>
        <h1>{question}</h1>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
              {product.recommended && (
                <h6>Recommended</h6>
              )}
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <p>{product.image_url}</p>
              <p>{product.descriptor}</p>
              <p>{product.description}</p>
              <p>{product.dataSheetUrl}</p>
              <p>{product.bvRating}</p>
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

class FourCards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { question, answers } = this.props.data

    const handleAnswer = this.props.handleAnswer
    return (
      <div>
        <div className='header'>
          <span className='question-number'>{`0${this.props.questionNumber}`}</span>
          <h1>{question}</h1>
        </div>

        <ul className='card-holder'>
          {answers &&
            answers.map(answer => (
              <li key={answer.answer}>
                {answer.imageUrl && (
                  <img src={answer.imageUrl} alt='' />
                )}
                <p>{answer.description}</p>
                <button className='left-text' onClick={handleAnswer}>{answer.answer}</button>
              </li>
            )
            )}
        </ul>
      </div>
    )
  }
}

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      solutions: null,
      progress: 0,
      questionNumber: 1,
      data: null
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
  handleAnswer(event) {
    let { answers } = this.state.data
    let nextStep = null
    let solutions = null
    const answer = event.target.innerText.toLowerCase();
    answers.forEach((answer) => {
      if (answer.products) {
        nextStep = answer
        solutions = true
      } else if (answer.answer === event.target.innerText.toLowerCase()) {
        nextStep = answer
      }
    })
    let progress = (this.state.data.nodeDepth / 4) * 100

    this.setState({
      data: nextStep,
      solutions,
      progress,
      questionNumber: this.state.questionNumber + 1
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
          <ProgressBar progress={this.state.progress} />
          <Solutions data={this.state.data} />
        </div>
      )
    }
    if (this.state.data.layout === 'fourCards') {
      return (
        <div className='container'>
          <ProgressBar progress={this.state.progress} />
          <FourCards data={this.state.data} handleAnswer={this.handleAnswer} questionNumber={this.state.questionNumber} />
        </div>
      )
    }
    if (this.state.data.layout === 'fullScreen') {
      return (
        <div className='container'>
          <ProgressBar progress={this.state.progress} />
          <FullScreen data={this.state.data} handleAnswer={this.handleAnswer} questionNumber={this.state.questionNumber} />
        </div>
      )
    }

  }
}

