import React from 'react'

export default class Solutions extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { question, products } = this.props.data
    return (
      <React.Fragment>
        <h1>{question}</h1>
        <ul>
          {products.map((product) => (
            <li key={product.name}>
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