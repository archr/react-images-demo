import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Gallery from './Gallery'

const DEFAULT_IMAGES = [
  { id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
  { id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
  { id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
  { id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
  { id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
]

function makeUnsplashSrc (id) {
  return `https://images.unsplash.com/photo-${id}?dpr=2&auto=format&w=1024&h=1024`;
}


class App extends Component {
  constructor() {
    super()

    this.state = {
      showLighbox: false
    }
  }

  render() {
    const images = DEFAULT_IMAGES.map((image) => ({ src: makeUnsplashSrc(image.id) }))

    return (
      <div>
        {images.map((image, i) => (
          <img
            src={image.src}
            key={i}
            style={{ width: 120 }}
            onClick={() => this.setState({ showLighbox: true })}
            />
        ))}

        {this.state.showLighbox ? (
          <Gallery
            images={images}
            onClose={() => this.setState({ showLighbox: false })}
          />
        ): null}

      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#content'))
