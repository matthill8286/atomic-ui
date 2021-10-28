import { Settings } from 'react-slick';
import { BadgeType } from '@/components/Atoms/Badge/Badge.interface';
import { Asset } from '@/types/asset';
interface SliderItem {
    headline?: string;
    usageType?: string;
    videoID?: string;
    link?: string | null;
    metadata?: string | null;
    assetID?: string;
    sortOrder?: number;
    url?: string;
}
declare type Item = SliderItem | Asset;
export interface CarouselProps {
    className?: string;
    sliderSettings: Settings;
    items: Item[];
    badges?: BadgeType[];
    whiteDots?: boolean;
    hasThumbnails?: boolean;
    boxShadow?: boolean;
    hasOverflow?: boolean;
    hasPadding?: boolean;
    fullHeight?: boolean;
    renderSlide(entry: Item, index: number, isThumbnails?: boolean): React.ReactNode;
}
export {};
//# sourceMappingURL=Carousel.interface.d.ts.map