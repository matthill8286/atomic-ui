import { Asset } from '@/types'

export const withTernary = ({ conditionA }, asset) =>
  conditionA ? asset?.embedVideoURL : asset?.image

const addHttps = (url: string): string | null => {
  if (/http:\/\//i.test(url)) {
    return url.split(/http:\/\//i).join('https://')
  }
  if (!/http/i.test(url)) {
    return 'https://'.concat(url)
  }
  return null
}

const addEmbeddedMedia = (asset: Asset | Partial<Asset>, canBeEmbedded: boolean): string => {
  const url: string = withTernary(
    {
      conditionA: canBeEmbedded,
    },
    asset as Asset
  )

  const sanitisedUrl = addHttps(url) ?? url

  // Youtube come as youtube.com/watch?v= and need to be youtube.com/embed/
  if (/youtube\.com/i.test(sanitisedUrl)) {
    return sanitisedUrl.split(/watch\?v=/i).join('embed/') + '?showinfo=0'
  }
  // Youtube come as youtu.be/ and need to be youtube.com/embed/
  if (/youtu\.be/i.test(sanitisedUrl)) {
    return `https://www.youtube.com/embed/${sanitisedUrl.split('/')[3]}?showinfo=0`
  }

  // don't mangle well-formed Vimeo URLs
  if (/player\.vimeo\.com\/video\//i.test(sanitisedUrl)) {
    return `${sanitisedUrl}?title=false&texttrack=false&quality=240p&byline=false`
  }

  // Vimeo links need to be player.vimeo.com/video/
  if (/vimeo\.com\/(?!event)/i.test(sanitisedUrl)) {
    return `https://player.vimeo.com/video/${
      sanitisedUrl.split('/')[3]
    }?title=false&texttrack=false&quality=240p&byline=false`
  }
  // but avoid changing 'event' links as these are streams
  if (/vimeo\.com\/event/i.test(sanitisedUrl)) {
    return sanitisedUrl
  }
  // Ted links come as www.ted.com and need to be embed.ted.com
  if (/ted\.com/i.test(sanitisedUrl)) {
    return sanitisedUrl.split(/www/i).join('embed')
  }

  return sanitisedUrl
}

export const useEmbeddedMedia = (asset: Asset | Partial<Asset>): string | null =>
  addEmbeddedMedia(asset, asset?.embedVideoURL !== '')
