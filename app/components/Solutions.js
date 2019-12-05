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
        <div className='header solution'>
          <span className='question-number'>{`0${this.props.questionNumber}`}</span>
          <h1>{question}</h1>
        </div>
        <ul className='solutions'>
          {products.map((product) => (

            <SolutionCard key={product.name} product={product} />

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
    const { product } = this.props

    return (
      <li

        className='solution-item'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleMouseEnter}
        onBlur={this.handleMouseLeave}
      >

        {product.recommended && (
          <div className='recommended'>
            <p>Recommended</p>
          </div>
        )}
        <img src={product.imageUrl} />
        <h3 className='solution-name'>{product.name}</h3>
        <p className='solution-price'>{product.price}</p>
        <div className={this.state.hovering ? 'solution-slider' : 'solution-slider close'} >
          <h3>{product.name}</h3>
          <a className='slider-compare' href='#'>Compare</a>
          <p className='slider-price'>{product.price}</p>
          <p className='slider-rating'>{product.bvRating}</p>
          <p className='slider-descriptor'>{product.descriptor}</p>
          <p className='slider-description'>{product.description}</p>
          <div className='slider-btns'>
            <button className='lava-btn'>Select</button>
            <a className='slider-ds' href='#'>Data Sheet</a>
          </div>
        </div>
      </li>
    )
  }
}