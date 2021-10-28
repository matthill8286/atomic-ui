import { FC } from 'react';
import { MediaType } from '@/styles/media';
export interface MediaStyleSwitchProps {
    className?: string;
    query: MediaType | string;
    activeCSS?: string;
    inactiveCSS?: string;
    activeDisplay?: string;
    inactiveDisplay?: string;
}
export declare const MediaStyleSwitch: FC<MediaStyleSwitchProps>;
//# sourceMappingURL=MediaStyleSwitch.d.ts.map