// https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-67595203/fee_786_587_png
const PICTURE_URL = 'assets.mmsrg.com/isr/166325/c1/-'
const PICTURE_RESOLUTION = 'pwa-786_587'

export function getPictureUrl(pictureDoi: string, pictureResolution: string = PICTURE_RESOLUTION) {
  return `https://${PICTURE_URL}/${pictureDoi}/${pictureResolution}`
}
