import React from "react";
import { getData } from "../utils/api";

class FourCards extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {


    if (this.props.data === null) {
      return <h1>loading</h1>
    }
    const { question, node_depth, layout, answers } = this.props.data
    const handleAnswer = this.props.handleAnswer
    console.log(this.props.data)
    return (
      <div>
        <h1>{question}</h1>
        <h2>{node_depth}</h2>
        <h3>{layout}</h3>
        <ul>
          {answers &&
            answers.map(answer => <li key={answer.answer}><button onClick={handleAnswer}>{answer.answer}</button></li>)}
        </ul>
      </div>
    )
  }
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
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
          error: error
        });
      });
  }
  handleAnswer(e) {
    let { answers } = this.state.data
    let nextQuestion = null;
    answers.forEach((answer) => {
      if (answer.answer === e.target.innerText) {
        nextQuestion = answer.next_question
      }
    })
    this.setState({
      data: nextQuestion
    })
  }
  render() {


    if (this.state.error) {
      <h1>{this.state.error}</h1>;
    }
    return (
      <FourCards data={this.state.data} handleAnswer={this.handleAnswer} />
    );
  }
}

export default LandingPage;

