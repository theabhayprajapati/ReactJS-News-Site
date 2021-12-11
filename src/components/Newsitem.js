import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Newsitem extends Component {
  static propTypes = {
    // prop: PropTypes,
  }

  render() {
    let { title, description, image, newsurl, author, newfrom } = this.props
    return (
      <div className="card" style={{ width: '18rem' }}> //? this is div of card componenet...
      {/* Images */}
        <img src={image} className="card-img-top" alt="..." />
        
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="text-danger">
            <strong> {newfrom}</strong>
          </p>
          <p className="my-2">
            Author: <strong>{author}</strong>
          </p>
          <p className="card-text">{description}...</p>
          <a href={newsurl} className="btn btn-primary">
            Read more--
          </a>
        </div>
      </div>
      //   </div>
    )
  }
}
