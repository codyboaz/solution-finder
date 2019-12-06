import React from 'react'

export default class FullScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imgUrl: null
    }

    this.mouseOver = this.mouseOver.bind(this)
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
  mouseOver(url) {
    this.setState({
      imgUrl: url
    })
  }
  render() {
    const { question, answers } = this.props.data
    const { handleAnswer } = this.props
    return (
      <div className='full-screen'>
        {this.props.children}
        <div className='header question'>
          <span className='question-number'>{`0${this.props.questionNumber}`}</span>
          <h1>{question}</h1>
        </div>
        <div className='fullscreen-img-wrapper'>
          <img src={this.state.imgUrl} className='fullscreen-img' />
        </div>
        <ul className='fullscreen-btns'>
          {answers &&
            answers.map(answer => (
              <li key={answer.answer}>
                <button
                  className='center-text'
                  onClick={() => handleAnswer(answer.answer)}
                  onMouseOver={() => this.mouseOver(answer.imageUrl)}
                  onFocus={() => this.mouseOver(answer.imageUrl)}
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