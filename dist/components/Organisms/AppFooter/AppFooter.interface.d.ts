import { FlexItemProps } from '@/components/Helper/FlexBox';
import { GroupedActionLinksProps } from '@/components/Molecules/ActionLink';
export interface AppFooterProps extends FlexItemProps {
    links?: GroupedActionLinksProps['links'];
    logoUrl: string;
    altText?: string;
    twitterLink?: string;
    instagramLink?: string;
    facebookLink?: string;
    youtubeLink?: string;
    text?: string;
    padding?: boolean;
    socialIcons?: JSX.Element;
}
//# sourceMappingURL=AppFooter.interface.d.ts.map