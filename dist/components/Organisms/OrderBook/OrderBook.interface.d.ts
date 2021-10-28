export interface TickerShape {
    ticker: string;
    tickSize: number;
}
export declare type OrderMeta = {
    price: PriceDisplay;
    size: number;
    total: number;
};
export declare type OrderRowUntotaled = {
    price: PriceDisplay;
    size: number;
    total: number;
    date?: Date;
};
export declare type Type = 'ask' | 'bid';
declare type PriceDisplay = string;
declare type Price = number;
declare type Size = number;
export declare type OrderDeltaForDisplay = [PriceDisplay, Size];
export declare type OrderDelta = [Price, Size];
export declare type OrderDeltaWithTimestamp = {
    price: PriceDisplay;
    size: Size;
    date: Date;
};
export interface CryptoFacilitiesWSSnapshot {
    product_id: string;
    numLevels: number;
    feed: string;
    bids: OrderDelta[];
    asks: OrderDelta[];
}
export interface OrderRowHash {
    [key: number]: OrderMeta;
}
export interface OrderRowState {
    ticker: string;
    asks: OrderRowHash;
    bids: OrderRowHash;
    maxPriceSize: number;
}
export interface SourceOrderBook {
    product_id: string;
    numLevels: number;
    feed: string;
    asks: {
        [key: number]: OrderDeltaWithTimestamp;
    };
    bids: {
        [key: number]: OrderDeltaWithTimestamp;
    };
}
export interface GranularOrderDelta {
    product_id: string;
    feed: string;
    asks: OrderDelta[];
    bids: OrderDelta[];
}
export {};
//# sourceMappingURL=OrderBook.interface.d.ts.map