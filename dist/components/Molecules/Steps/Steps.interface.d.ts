import { ReactElement } from 'react';
import { Elevation, ThemeColors } from '@/types/theme';
export declare type StepsVariant = 'prominent' | 'simple' | 'uniform';
export interface StepConnectorProps {
    color?: ThemeColors;
    active?: boolean;
    prevActive?: boolean;
    completed?: boolean;
    elementPosition?: ElementPosition;
    variant?: StepsVariant;
}
export interface StepConnectorLineProps extends StepConnectorProps {
    borderWidth: string;
}
export interface CustomIconProps {
    active?: boolean;
    completed?: boolean;
    color?: ThemeColors;
}
export interface StepIconProps {
    active?: boolean;
    completed?: boolean;
    stepNumber?: string;
    color?: ThemeColors;
    variant?: StepsVariant;
    customIcon?: ReactElement<{
        active: boolean;
        completed: boolean;
        color: ThemeColors;
    }>;
}
export declare type ElementPosition = 'default' | 'first' | 'second' | 'last';
export declare type StepConnectorPositions = {
    [key in StepsVariant]: {
        [key in ElementPosition]: {};
    };
};
export interface StepPublicProps {
    title?: string;
    description?: string;
}
export interface StepPrivateProps {
    color?: ThemeColors;
    active?: boolean;
    completed?: boolean;
    elementPosition?: ElementPosition;
    stepIndex?: number;
    icon?: ReactElement<{
        active: boolean;
        completed: boolean;
        color: ThemeColors;
    }>;
    connector?: ReactElement<StepConnectorProps>;
    variant?: StepsVariant;
    onClick?: (stepIndex: number) => void;
}
export interface StepsProps {
    activeStep: number;
    completedStep: number;
    elevation?: Elevation;
    color?: ThemeColors;
    children?: ReactElement<StepPublicProps>[];
    connector?: ReactElement<StepConnectorProps>;
    variant?: StepsVariant;
    onChange?: (step: number) => void;
}
//# sourceMappingURL=Steps.interface.d.ts.map