import { Keyframes } from 'styled-components';
import { Transition } from '@/types';
declare type FillMode = 'forwards' | 'backwards' | 'none';
export interface AnimationBoxProps extends AnimationProps {
    keyframes: Keyframes;
}
export interface AnimationProps {
    infinite: boolean;
    fillMode: FillMode;
    transition: keyof Transition;
    easing: string;
}
export interface KeyframesDefinition {
    keyframes: Keyframes;
    name: string;
}
export {};
//# sourceMappingURL=AnimationOverview.interface.d.ts.map