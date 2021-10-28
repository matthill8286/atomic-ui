import { getTransformedImageVersion } from "../../../utils/useGraphCmsImages";
export var backlink = {
  name: "Let's Go home",
  link: '/home'
};
export var breadcrumbPath = [{
  name: 'Playlist',
  link: '/'
}, {
  name: 'Collections',
  link: '/'
}];
export var height = {
  mobile: 200,
  tablet: 260,
  desktop: 300
};
export var image = {
  mobile: getTransformedImageVersion('1FfvDDFERwWh35wkpNky'),
  tablet: getTransformedImageVersion('zdkfrHcOQQmNekeIxjve')
};
export var paddingBottom = {
  mobile: 'xs',
  tablet: 'xs'
};
export var paddingTop = {
  tablet: 'xs',
  desktop: 'xs'
};
export var PlaylistMock = {
  pid: '628ce219-0158-4eb0-b864-61c59eff0f70',
  name: 'Conflict Management',
  image: getTransformedImageVersion('FtMfGctDTKGIYVzDm5dL'),
  strategy: '?',
  totalAssetDuration: '1 day 15 hours 31 minutes',
  completionPercentage: '75% completed',
  numberOfAssets: '12 assets',
  description: 'This is the Conflict Management playlist'
};
export var props = {
  playlist: PlaylistMock,
  breadcrumbPath: undefined,
  colors: 'primary',
  headingColor: 'grey6',
  height: height,
  paddingBottom: paddingBottom,
  paddingTop: paddingTop,
  withImage: true,
  shape: 'rounded-small'
};
//# sourceMappingURL=PlaylistStage.mocks.js.map