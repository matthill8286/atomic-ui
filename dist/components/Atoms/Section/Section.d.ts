import { HeightMap, ImageMap, ThemeColors, VerticalPaddingMap } from '@/types/theme';
import { Shape, Corners } from '@/components/Atoms/Card/Card.interface';
export interface SectionProps {
    color?: ThemeColors;
    image?: ImageMap | undefined;
    paddingTop?: VerticalPaddingMap;
    paddingBottom?: VerticalPaddingMap;
    height?: HeightMap;
    center?: boolean;
    shape?: Shape | Corners<Shape>;
}
export declare const Section: import("styled-components").StyledComponent<"section", import("../../../types/theme").Theme, SectionProps, never>;
//# sourceMappingURL=Section.d.ts.map