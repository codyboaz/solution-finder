import React from 'react'

export default function FourCards({ data, handleAnswer, questionNumber }) {
  const { question, answers } = data

  return (
    <div>
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

    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    this.setState(({ hovering }) => {
      return {
        hovering: !hovering
      }
    })
  }

  render() {

    const { answer, handleAnswer } = this.props
    return (
      <li
        className='single-card'
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
        onFocus={this.handleHover}
        onBlur={this.handleHover}
      >
        {answer.imageUrl && (
          <div className={this.state.hovering ? 'image-container' : 'image-container return'}>
            <img src={answer.imageUrl} alt='' />
          </div>
        )}

        <div className={this.state.hovering ? 'card-slider' : 'card-slider close'}>
          {/* <div className='card-slider'> */}
          <div className='slider-content'>
            <h2 onClick={handleAnswer}>
              {answer.answer}
            </h2>
            <p>{answer.description}</p>
            <button className='btn-lava'>Select</button>
          </div>

        </div>

      </li >
    )
  }
}