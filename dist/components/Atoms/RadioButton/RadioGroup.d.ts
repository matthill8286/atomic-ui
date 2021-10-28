import { FC } from 'react';
import { SelectableState } from '../Selectable/Selectable.interface';
interface RenderPropObject {
    name: string;
    onChange: (isChecked?: boolean, value?: string) => void;
    selected?: string;
    state?: SelectableState;
}
interface RadioGroupProps {
    name: string;
    onChange?: (value: string) => void;
    children: (props: RenderPropObject) => React.ReactElement | null;
    state?: SelectableState;
}
export declare const RadioGroup: FC<RadioGroupProps>;
export {};
//# sourceMappingURL=RadioGroup.d.ts.map