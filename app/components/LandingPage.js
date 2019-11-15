import React from "react";
import { getData } from "../utils/api";
import { Line } from 'rc-progress'

function ProgressBar({ progress }) {
  return (
    <Line percent={progress} strokeWidth='1' strokeColor='#EB3300' trailWidth='0.25' trailColor='#000' />
  )
}

class Solutions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, question, nodeDepth, products } = this.props.data
    return (
      <React.Fragment>
        <h1>{question}</h1>
        <h2>{name}</h2>
        <h2>{nodeDepth}</h2>
        <ul>
          {products.map((product) => (
            <li>
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

    if (this.props.data === null) {
      return <h1>loading</h1>
    }

    const { question, name, answers } = this.props.data

    const handleAnswer = this.props.handleAnswer
    return (
      <div>
        <div className='header'>
          <span className='question-number'>{`0${this.props.questionNumber}`}</span>
          <h1>{question}</h1>
        </div>

        {name && (
          <h2>{name}</h2>
        )}
        <ul className='card-holder'>
          {answers &&
            answers.map(answer => (
              <li key={answer.answer}>
                {answer.imageUrl && (
                  <img src={answer.imageUrl} alt='' />
                )}
                <p>{answer.description}</p>
                <button onClick={handleAnswer}>{answer.answer}</button>
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
        this.setState({
          data
        });
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
    console.log(answer)
    answers.forEach((answer) => {
      if (answer.solutions) {
        nextStep = answer.solutions
        solutions = true
      } else if (answer.answer === event.target.innerText.toLowerCase()) {
        console.log('yes!')
        nextStep = answer.nextQuestion
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
    return (
      <div className='container'>
        <ProgressBar progress={this.state.progress} />
        <FourCards data={this.state.data} handleAnswer={this.handleAnswer} questionNumber={this.state.questionNumber} />
      </div>
    )
  }
}

