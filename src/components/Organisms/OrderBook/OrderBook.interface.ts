/* eslint-disable camelcase */
export interface TickerShape {
  ticker: string
  tickSize: number
}

export type OrderMeta = {
  price: PriceDisplay
  size: number
  total: number
}

export type OrderRowUntotaled = {
  price: PriceDisplay
  size: number
  total: number
  date?: Date
}

export type Type = 'ask' | 'bid'

type PriceDisplay = string
type Price = number
type Size = number

export type OrderDeltaForDisplay = [PriceDisplay, Size]

export type OrderDelta = [Price, Size]

export type OrderDeltaWithTimestamp = {
  price: PriceDisplay
  size: Size
  date: Date
}

export interface CryptoFacilitiesWSSnapshot {
  product_id: string
  numLevels: number
  feed: string
  bids: OrderDelta[]
  asks: OrderDelta[]
}

export interface OrderRowHash {
  [key: number]: OrderMeta
}

export interface OrderRowState {
  ticker: string
  asks: OrderRowHash
  bids: OrderRowHash
  maxPriceSize: number
}

export interface SourceOrderBook {
  product_id: string
  numLevels: number
  feed: string
  asks: { [key: number]: OrderDeltaWithTimestamp }
  bids: { [key: number]: OrderDeltaWithTimestamp }
}

export interface GranularOrderDelta {
  product_id: string
  feed: string
  asks: OrderDelta[]
  bids: OrderDelta[]
}
