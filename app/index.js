import React from 'react'
import ReactDOM from 'react-dom'
import Container from './components/Container'
import './index.css'

if (process.env.NODE_ENV !== 'production') {
  var axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}
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