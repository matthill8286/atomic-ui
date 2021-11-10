import { Product } from '@/types'

export const withTernary = ({ conditionA }, product) =>
  conditionA ? product?.embedVideoURL : product?.image

const addHttps = (url: string): string | null => {
  if (/http:\/\//i.test(url)) {
    return url.split(/http:\/\//i).join('https://')
  }
  if (!/http/i.test(url)) {
    return 'https://'.concat(url)
  }
  return null
}

const addEmbeddedMedia = (product: Product | Partial<Product>, canBeEmbedded: boolean): string => {
  const url: string = withTernary(
    {
      conditionA: canBeEmbedded,
    },
    product as Product
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

export const useEmbeddedMedia = (product: Product | Partial<Product>): string | null =>
  addEmbeddedMedia(product, product?.embedVideoURL !== '')
