import React from 'react'
import { renderWithTheme } from '@/testRenderer'
import { Carousel } from './Carousel'
import { pictureEntries } from './Carousel.data'
import { renderWithPictureComponent } from './Carousel.story'

describe('Carousel', () => {
  it('renders correctly', () => {
    const tree = renderWithTheme(
      <Carousel
        items={pictureEntries}
        renderSlide={renderWithPictureComponent}
        sliderSettings={{
          dots: true,
          infinite: false,
          slidesToScroll: 1,
          slidesToShow: 1,
          speed: 500,
        }}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
