import { TileImages } from '@/components/Organisms/HeroBanner/HeroBanner.interface';
import { PictureObjectFit } from '@/components/Atoms/Picture';
import { ReactElement } from 'react';
export interface HeroContent {
    primary?: string;
    name?: string;
    secondary?: string;
}
export interface FeaturedImageProps {
    hero?: boolean;
    svg?: JSX.Element;
    images?: TileImages | undefined;
    objectFit?: PictureObjectFit;
}
export interface FeaturedHeadingProps {
    children?: JSX.Element | ReactElement | null;
    primary: HeroContent['primary'];
    secondary?: HeroContent['secondary'];
}
//# sourceMappingURL=TopTeaser.interface.d.ts.map