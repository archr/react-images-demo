import React, { Component } from 'react'
import Lightbox from 'react-images'

export default class Gallery extends Component {
  constructor() {
    super()

    this.state = {
      currentImage: 0
    }
  }

  onClickNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  onClickPrev = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  render() {
    return (
      <Lightbox
        images={this.props.images}
        isOpen
        currentImage={this.state.currentImage}
        onClickNext={this.onClickNext}
        onClickPrev={this.onClickPrev}
        onClose={this.props.onClose}
      />
    )
  }
}
