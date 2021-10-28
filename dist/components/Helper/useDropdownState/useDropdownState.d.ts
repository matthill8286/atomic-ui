/// <reference types="react" />
/**
 * Provides the current state of a dropdown, a function to toggle it and a
 * reference container.
 *
 * Usage: call the hook in your FunctionComponent and provide an element type
 * as generic argument. E.g: useDropdownState<HTMLDivElement>()
 * Then attach the ref container to the DOM element of your dropdown-component.
 * E.g.: <div ref={element}>...
 */
export declare const useDropdownState: <T extends HTMLElement>(initial?: boolean) => {
    showDropdown: boolean;
    toggleDropdown: () => void;
    element: import("react").RefObject<T>;
};
//# sourceMappingURL=useDropdownState.d.ts.map