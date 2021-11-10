import { renderHook } from '@testing-library/react-hooks'
import { newProductMocks } from '../../Organisms/ProductTile'
import { useEmbeddedMedia } from './useEmbeddedMedia'
import { act } from '@testing-library/react'

describe('useEmbeddedMedia hook', () => {
  let product
  beforeEach(() => {
    product = {
      ...newProductMocks[0],
    }
  })

  describe('with embedding turned on', () => {
    test('will return valid Youtube links', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({
          ...product,
          embedVideoURL: 'https://www.youtube.com/watch?v=5fI3zz2cp3k',
        })
      )
      expect(result.current).toBe('https://www.youtube.com/embed/5fI3zz2cp3k?showinfo=0')
    })

    test('will also parse Youtu.be links', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({ ...product, embedVideoURL: 'https://youtu.be/5fI3zz2cp3k' })
      )
      expect(result.current).toBe('https://www.youtube.com/embed/5fI3zz2cp3k?showinfo=0')
    })

    test('will return valid Vimeo links', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({ ...product, embedVideoURL: 'https://vimeo.com/242805528' })
      )
      expect(result.current).toBe(
        'https://player.vimeo.com/video/242805528?title=false&texttrack=false&quality=240p&byline=false'
      )
    })

    test('will not mangle well-formed Vimeo links', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({ ...product, embedVideoURL: 'https://player.vimeo.com/video/518498094' })
      )
      expect(result.current).toBe(
        'https://player.vimeo.com/video/518498094?title=false&texttrack=false&quality=240p&byline=false'
      )
    })

    test('will return valid Vimeo event links', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({
          ...product,
          embedVideoURL: 'https://vimeo.com/event/428541',
        })
      )
      expect(result.current).toBe('https://vimeo.com/event/428541')
    })

    test('will return valid Ted Talk links', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({
          ...product,
          embedVideoURL:
            'https://www.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers',
        })
      )
      expect(result.current).toBe(
        'https://embed.ted.com/talks/adam_grant_the_surprising_habits_of_original_thinkers'
      )
    })

    test('will return only https:// links', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({ ...product, embedVideoURL: 'http://vimeo.com/event/428541/embed' })
      )
      expect(result.current).toBe('https://vimeo.com/event/428541/embed')
    })

    test('will add https:// if missing', () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({ ...product, embedVideoURL: 'vimeo.com/event/428541/embed' })
      )
      expect(result.current).toBe('https://vimeo.com/event/428541/embed')
    })

    test("will return image url when embedVideoURL isn't valid", () => {
      const { result } = renderHook(() =>
        useEmbeddedMedia({
          ...product,
          embedVideoURL: '',
        })
      )
      expect(result.current).toBe(product.image)
    })
  })
})
