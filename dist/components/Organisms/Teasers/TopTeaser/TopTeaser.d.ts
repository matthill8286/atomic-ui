import React, { ReactElement } from 'react';
import { HeroBannerProps } from '../../HeroBanner/HeroBanner.interface';
import { TileImages } from '@/components/Organisms/HeroBanner/HeroBanner.interface';
import { HeroContent } from './TopTeaser.interface';
export interface FeaturedContentProps {
    svg?: JSX.Element | ReactElement | undefined;
    content?: HeroContent;
    images?: TileImages | undefined;
}
export declare const FeaturedContent: React.FC<FeaturedContentProps>;
export declare const TopTeaser: React.FC<HeroBannerProps & FeaturedContentProps>;
//# sourceMappingURL=TopTeaser.d.ts.map