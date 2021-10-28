import React, { MouseEvent } from 'react';
declare type Props = {
    visible?: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN';
    onClick?: (e: MouseEvent<Element, MouseEvent>) => void;
    onMouseOver?: (e: MouseEvent<Element, MouseEvent>) => void;
};
declare type InnerProps = {
    visible?: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN';
    onClick?: (e: MouseEvent<Element, MouseEvent>) => void;
    onMouseOver?: (e: MouseEvent<Element, MouseEvent>) => void;
};
declare type InnerState = {
    scrollDirection: 'NONE' | 'UP' | 'DOWN';
    backToTop: 'VISIBLE' | 'TRANSPARENT' | 'HIDDEN';
};
export declare const withBackToTop: (WrappedComponent: React.FC<Props>) => {
    new (props: Readonly<InnerProps>): {
        handleTimeout?: any | undefined;
        subscribers: any[];
        state: Readonly<InnerState>;
        handleScroll(event: unknown, augmentedEvent: {
            scroll: {
                delta: number;
                top: number;
            };
        }): void;
        handleBackToTop(scrollPositionY: number): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "scrollDirection" | "backToTop">(state: InnerState | ((prevState: Readonly<InnerState>, props: Readonly<InnerProps>) => InnerState | Pick<InnerState, K> | null) | Pick<InnerState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<InnerProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<InnerProps>, nextState: Readonly<InnerState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<InnerProps>, prevState: Readonly<InnerState>): any;
        componentDidUpdate?(prevProps: Readonly<InnerProps>, prevState: Readonly<InnerState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<InnerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<InnerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<InnerProps>, nextState: Readonly<InnerState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<InnerProps>, nextState: Readonly<InnerState>, nextContext: any): void;
    };
    new (props: InnerProps, context?: any): {
        handleTimeout?: any | undefined;
        subscribers: any[];
        state: Readonly<InnerState>;
        handleScroll(event: unknown, augmentedEvent: {
            scroll: {
                delta: number;
                top: number;
            };
        }): void;
        handleBackToTop(scrollPositionY: number): void;
        componentDidMount(): void;
        componentWillUnmount(): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "scrollDirection" | "backToTop">(state: InnerState | ((prevState: Readonly<InnerState>, props: Readonly<InnerProps>) => InnerState | Pick<InnerState, K> | null) | Pick<InnerState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<InnerProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<InnerProps>, nextState: Readonly<InnerState>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<InnerProps>, prevState: Readonly<InnerState>): any;
        componentDidUpdate?(prevProps: Readonly<InnerProps>, prevState: Readonly<InnerState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<InnerProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<InnerProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<InnerProps>, nextState: Readonly<InnerState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<InnerProps>, nextState: Readonly<InnerState>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
export {};
//# sourceMappingURL=withBackToTop.d.ts.map