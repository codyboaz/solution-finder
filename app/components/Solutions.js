import React from 'react'

export default class Solutions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      singleSolution: false,
      solution: null
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(solution) {
    this.setState({
      singleSolution: true,
      solution
    })
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
        {
          this.state.singleSolution ?
            <Solution solution={this.state.solution} />
            :
            <ul className='solutions'>
              {products.map((product) => (
                <SolutionCard key={product.name} solution={product} handleSelect={this.handleSelect} />
              ))}
            </ul>
        }
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
    const { solution, handleSelect } = this.props

    return (
      <li

        className='solution-item'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onFocus={this.handleMouseEnter}
        onBlur={this.handleMouseLeave}
      >

        {solution.recommended && (
          <div className='recommended'>
            <p>Recommended</p>
          </div>
        )}
        <img src={solution.imageUrl} alt={solution.name} />
        <h3 className='solution-name'>{solution.name}</h3>
        <p className='solution-price'>{solution.price}</p>
        <div className={this.state.hovering ? 'solution-slider' : 'solution-slider close'} >
          <h3>{solution.name}</h3>
          <a className='slider-compare' href='#'>Compare</a>
          <p className='slider-price'>{solution.price}</p>
          <p className='slider-rating'>{solution.bvRating}</p>
          <p className='slider-descriptor'>{solution.descriptor}</p>
          <p className='slider-description'>{solution.description}</p>
          <div className='slider-btns'>
            <button className='lava-btn' onClick={() => handleSelect(solution)}>Select</button>
            <a className='slider-ds' href='#'>Data Sheet</a>
          </div>
        </div>
      </li>
    )
  }
}

class Solution extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { solution } = this.props
    return (
      <div className='solution-body'>
        <div className='img-container'>
          <img src={solution.imageUrl} alt={solution.name} />
        </div>
        <div className='detail-container'>
          <h3 className='solution-name'>{solution.name}</h3>
          <p className='solution-price'>{solution.price}</p>
          <p className='solution-rating'>{solution.bvRating}</p>
          <p className='solution-descriptor'>{solution.descriptor}</p>
          <p className='solution-description'>{solution.description}</p>
          <div className='btn-group'>
            <button className='lava-btn'>Learn More</button>
            <button className='secondary-btn'>Buy Now</button>
            <button className='secondary-btn'>Contact Sales</button>
          </div>
        </div>
      </div>
    )
  }
}