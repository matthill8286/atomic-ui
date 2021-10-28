import React from 'react';
import { ThemeColors } from '@/types';
import { OrderRowHash, Type } from '@/components/Organisms/OrderBook/OrderBook.interface';
interface OrderBookTableProps {
    rows: OrderRowHash;
    rowsKey: Type;
    maxPriceSize: number;
    isReversed?: boolean;
    title?: string;
    ticker?: string;
    headerTextColor?: ThemeColors;
    textColor?: ThemeColors;
    borderColor?: ThemeColors;
    rowColor?: ThemeColors;
    backgroundColor?: ThemeColors;
    hideOnMobile?: boolean;
    isOutlineRequired?: boolean;
}
export declare type Option = {
    key: string;
    color: string;
};
export declare type TypeOptions = {
    ask: Option;
    bid: Option;
};
export declare const OrderBookTable: React.FC<OrderBookTableProps>;
export {};
//# sourceMappingURL=OrderBook.d.ts.map