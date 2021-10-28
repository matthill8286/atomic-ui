import { CSSProperties, Dispatch, RefObject, SetStateAction } from 'react';
export declare type UseElementPositionProps = {
    ref?: RefObject<HTMLElement>;
    attachTo?: 'bottom-center' | 'bottom-left';
    delay?: number;
};
export declare type UseElementPositionReturnType = {
    position: Partial<CSSProperties>;
    isVisible: boolean;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
};
export declare const useElementPosition: ({ ref, attachTo, delay, }: UseElementPositionProps) => UseElementPositionReturnType;
//# sourceMappingURL=useElementPosition.d.ts.map