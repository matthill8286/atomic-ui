/// <reference types="react" />
export declare const ScrollAwareBackToTop: {
    new (props: Readonly<{
        visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
        onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
    }>): {
        handleTimeout?: any;
        subscribers: any[];
        state: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>;
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
        setState<K extends "scrollDirection" | "backToTop">(state: {
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        } | ((prevState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, props: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>) => {
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        } | Pick<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }, K> | null) | Pick<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, prevState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>): any;
        componentDidUpdate?(prevProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, prevState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, nextContext: any): void;
    };
    new (props: {
        visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
        onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
    }, context?: any): {
        handleTimeout?: any;
        subscribers: any[];
        state: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>;
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
        setState<K extends "scrollDirection" | "backToTop">(state: {
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        } | ((prevState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, props: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>) => {
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        } | Pick<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }, K> | null) | Pick<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }> & Readonly<{
            children?: import("react").ReactNode;
        }>;
        refs: {
            [key: string]: import("react").ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, nextContext: any): boolean;
        componentDidCatch?(error: Error, errorInfo: import("react").ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, prevState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>): any;
        componentDidUpdate?(prevProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, prevState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<{
            visible?: "VISIBLE" | "TRANSPARENT" | "HIDDEN" | undefined;
            onClick?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
            onMouseOver?: ((e: import("react").MouseEvent<Element, import("react").MouseEvent<Element, MouseEvent>>) => void) | undefined;
        }>, nextState: Readonly<{
            scrollDirection: "NONE" | "UP" | "DOWN";
            backToTop: "VISIBLE" | "TRANSPARENT" | "HIDDEN";
        }>, nextContext: any): void;
    };
    contextType?: import("react").Context<any> | undefined;
};
//# sourceMappingURL=ScrollAwareBackToTop.d.ts.map