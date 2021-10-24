import { configure } from '@testing-library/react'
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

if (typeof window !== 'undefined') {
  window.matchMedia =
    window.matchMedia ||
    (() => ({
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }))

  window.requestAnimationFrame =
    window.requestAnimationFrame || (callback => setTimeout(callback, 0))
  window.scrollTo = jest.fn()
}

// Mock IntersectionObserver
class IntersectionObserver {
  observe = jest.fn()
  unobserve = jest.fn()
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
})

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() })
configure({ testIdAttribute: 'data-test' })
