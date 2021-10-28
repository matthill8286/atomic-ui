import { FC } from 'react';
interface MultiViewModalState {
    homeViewId: string | null;
    activeViewId: string | null;
    hasBackButton: boolean;
    isActive: boolean;
}
export declare const useMultiViewModalAction: () => {
    close: () => void;
    goHome: () => void;
    setView: (id: any) => void;
    setActive: (isActive: any) => void;
};
export declare const useMultiViewModalState: () => MultiViewModalState;
export declare const MultiViewModalProvider: FC<{
    homeViewId: string;
}>;
export {};
//# sourceMappingURL=MultiViewModal.store.d.ts.map