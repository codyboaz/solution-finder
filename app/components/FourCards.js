import React from 'react'

export default function FourCards({ data, handleAnswer, questionNumber }) {
  const { question, answers } = data

  return (
    <div className='four-cards'>
      <div className='header question'>
        <span className='question-number'>{`0${questionNumber}`}</span>
        <h1>{question}</h1>
      </div>

      <ul className='card-holder'>
        {answers &&
          answers.map(answer => (
            <Card key={answer.answer} answer={answer} handleAnswer={handleAnswer} />
          )
          )}
      </ul>
    </div>
  )
}

class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    this.setState({
      hovering: true
    })
  }

  handleMouseLeave() {
    this.setState({
      hovering: false
    })
  }

  render() {

    const { answer, handleAnswer } = this.props
    return (
      <li
        className='single-card'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleMouseEnter}
        onBlur={this.handleMouseLeave}
      >
        {answer.imageUrl && (
          <div className={this.state.hovering ? 'image-container' : 'image-container return'}>
            <img src={answer.imageUrl} alt='' />
          </div>
        )}

        <div className={this.state.hovering ? 'card-slider' : 'card-slider close'}>
          <div className='slider-content'>
            <h2>
              {answer.answer}
            </h2>
            <p>{answer.description}</p>
            <button className='btn-lava' onClick={() => handleAnswer(answer.answer)}>Select</button>
          </div>

        </div>

      </li >
    )
  }
}