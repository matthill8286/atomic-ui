export const pictureEntries = [
  {
    link: null,
    metadata: null,
    productID: 'featured-product-69001598',
    sortOrder: 0,
    usageType: 'Product Image',
    url: 'public/images/teasers/1.jpg',
    thUrl: 'public/images/teasers/1.jpg',
  },
  {
    link: null,
    metadata: null,
    productID: 'featured-product-69001599',
    sortOrder: 0,
    usageType: 'Product Image',
    url: 'public/images/teasers/02.jpg',
    thUrl: 'public/images/teasers/02.jpg',
  },
  {
    link: null,
    metadata: null,
    productID: 'featured-product-69001597',
    sortOrder: 0,
    usageType: 'Product Image',
    url: 'public/images/teasers/1.jpg',
    thUrl: 'public/images/teasers/1.jpg',
  },
  {
    link: null,
    metadata: null,
    productID: 'featured-product-76257815',
    sortOrder: 0,
    usageType: 'Product Image',
    url: 'public/images/teasers/04.jpg',
    thUrl: 'public/images/teasers/04.jpg',
  },
  {
    link: null,
    metadata: null,
    productID: 'featured-product-76257815',
    sortOrder: 0,
    usageType: 'Product Image',
    url: 'public/images/teasers/05.jpg',
    thUrl: 'public/images/teasers/05.jpg',
  },
]

export const teaserEntries = [
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
  {
    headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' +
      'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    image: 'https://via.placeholder.com/1200x350.png',
    link: '#',
    button: 'See more',
  },
]

export const videoEntries = [
  {
    headline: 'Lorem ipsum dolar sit amet',
    usageType: 'Product Video',
    articleEan: '5026555423076',
    videoID: '1222532',
    url: 'https://player.vimeo.com/video/400223292',
    thUrl: 'public/images/teasers/1.jpg',
  },
  {
    headline: 'Lorem ipsum dolar sit amet',
    usageType: 'Product Video',
    articleEan: '5026555423076',
    url: 'https://www.youtube.com/embed/-BdbiZcNBXg',
    videoID: '1229191',
    thUrl: 'public/images/teasers/1.jpg',
  },
]

export const withVideoEntries = [...videoEntries, pictureEntries[0], pictureEntries[1]]

export const defaultSettings = {
  dots: true,
  // must be false for videos
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const thumbnailSettings = {
  dots: false,
  infinite: true,
  speed: 500,
}

export const multiItemSettings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
}

export const teaserSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
}
