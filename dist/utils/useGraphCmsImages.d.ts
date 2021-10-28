export declare enum DocumentOutput {
    svg = "svg",
    jpg = "jpg",
    png = "png"
}
export declare enum ImageResizeFit {
    clip = "clip",
    crop = "crop",
    scale = "scale",
    max = "max"
}
export declare const getTransformedImageVersion: (handle?: string | undefined, args?: (typeof DocumentOutput)[] | (typeof ImageResizeFit)[] | string[] | undefined) => string | undefined;
export declare const useGraphCmsImages: (imageHandles: (string | undefined)[], skip?: boolean, imageArguments?: undefined) => [(string | undefined)[], (node?: Element | null | undefined) => void];
//# sourceMappingURL=useGraphCmsImages.d.ts.map