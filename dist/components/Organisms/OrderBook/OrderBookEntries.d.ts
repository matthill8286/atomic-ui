import React from 'react';
import { ThemeColors } from '@/types';
import { OrderMeta } from '@/components/Organisms/OrderBook/OrderBook.interface';
interface OrderBookEntriesProps {
    rows: any;
    rowsKey: string;
    color: ThemeColors;
    isReversed: boolean;
    maxPriceSize: number;
}
interface OrderBookEntryProps extends OrderMeta {
    color: ThemeColors;
    isReversed?: boolean;
    maxPriceSize: number;
    colorSpriteWidth: number;
}
export declare const OrderBookEntry: React.NamedExoticComponent<OrderBookEntryProps>;
export declare const OrderBookEntries: React.NamedExoticComponent<OrderBookEntriesProps>;
export {};
//# sourceMappingURL=OrderBookEntries.d.ts.map