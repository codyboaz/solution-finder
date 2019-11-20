import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/Container'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <Container />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)