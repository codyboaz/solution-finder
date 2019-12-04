import React from 'react'

export default class Solutions extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    const { question, products } = this.props.data
    return (
      <React.Fragment>
        {this.props.children}
        <div className='header'>
          <span className='question-number'>{`0${this.props.questionNumber}`}</span>
          <h1>{question}</h1>
        </div>
        <ul className='solutions'>
          {products.map((product) => (
            <li
              key={product.name}
              className='solution-item'
            >
              <SolutionCard product={product} />
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

class SolutionCard extends React.Component {
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
    const { product } = this.props

    return (
      <div
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHover}
      >
        {product.recommended && (
          <div className='recommended'>
            <p>Recommended</p>
          </div>
        )}
        <img src={product.imageUrl} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <div className={this.state.hovering ? 'solution-slider' : 'solution-slider close'} >
          <h3>{product.name}</h3>
          <a className='solution-compare' href='#'>Compare</a>
          <p className='solution-price'>{product.price}</p>
          <p className='solution-rating'>{product.bvRating}</p>
          <p className='solution-descriptor'>{product.descriptor}</p>
          <p className='solution-description'>{product.description}</p>
          <div className='solution-btns'>
            <button className='lava-btn'>Select</button>
            <a className='solution-ds' href='#'>Data Sheet</a>
          </div>
        </div>
      </div>
    )
  }
}