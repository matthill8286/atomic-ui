export var pictureEntries = [{
  link: null,
  metadata: null,
  assetID: 'featured-asset-69001598',
  sortOrder: 0,
  usageType: 'Asset Image',
  url: 'public/images/teasers/1.jpg',
  thUrl: 'public/images/teasers/1.jpg'
}, {
  link: null,
  metadata: null,
  assetID: 'featured-asset-69001599',
  sortOrder: 0,
  usageType: 'Asset Image',
  url: 'public/images/teasers/02.jpg',
  thUrl: 'public/images/teasers/02.jpg'
}, {
  link: null,
  metadata: null,
  assetID: 'featured-asset-69001597',
  sortOrder: 0,
  usageType: 'Asset Image',
  url: 'public/images/teasers/1.jpg',
  thUrl: 'public/images/teasers/1.jpg'
}, {
  link: null,
  metadata: null,
  assetID: 'featured-asset-76257815',
  sortOrder: 0,
  usageType: 'Asset Image',
  url: 'public/images/teasers/04.jpg',
  thUrl: 'public/images/teasers/04.jpg'
}, {
  link: null,
  metadata: null,
  assetID: 'featured-asset-76257815',
  sortOrder: 0,
  usageType: 'Asset Image',
  url: 'public/images/teasers/05.jpg',
  thUrl: 'public/images/teasers/05.jpg'
}];
export var teaserEntries = [{
  headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
  image: 'https://via.placeholder.com/1200x350.png',
  link: '#',
  button: 'See more'
}, {
  headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
  image: 'https://via.placeholder.com/1200x350.png',
  link: '#',
  button: 'See more'
}, {
  headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
  image: 'https://via.placeholder.com/1200x350.png',
  link: '#',
  button: 'See more'
}, {
  headline: 'Lorem ipsum dolor sit amet, consetetur sadipscing, diam.',
  content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,' + 'sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
  image: 'https://via.placeholder.com/1200x350.png',
  link: '#',
  button: 'See more'
}];
export var videoEntries = [{
  headline: 'Lorem ipsum dolar sit amet',
  usageType: 'Asset Video',
  articleEan: '5026555423076',
  videoID: '1222532',
  url: 'https://embed.ted.com/talks/sheena_iyengar_choosing_what_to_choose',
  thUrl: 'https://mycliplister.com/thumb/157815/19b4503aedd277825aed9e86bafe076a16e54b950bdb538593a9e82702cbc829d8f4bc2b780dccc78e51408c7bc53dd50'
}, {
  headline: 'Lorem ipsum dolar sit amet',
  usageType: 'Asset Video',
  articleEan: '5026555423076',
  url: 'https://www.youtube.com/embed/-BdbiZcNBXg',
  videoID: '1229191',
  thUrl: 'https://mycliplister.com/thumb/157815/19b4503aedd277825aed9e86bafe076a1d8b32fa094ed68f3cd6b87b394d1cb1a5e877deac9cdb3eb961213a362de16d0'
}];
export var withVideoEntries = [].concat(videoEntries, [pictureEntries[0], pictureEntries[1]]);
export var defaultSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
export var thumbnailSettings = {
  dots: false,
  infinite: true,
  speed: 500
};
export var multiItemSettings = {
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2
};
export var teaserSettings = {
  dots: false,
  arrows: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1
};
//# sourceMappingURL=Carousel.data.js.map