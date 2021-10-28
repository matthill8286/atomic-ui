import { ReactWrapper } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { Theme } from '@/types';
export declare function renderWithTheme<C extends React.Component, P = C['props'], S = C['state']>(tree: React.ReactElement<P>, theme?: Theme): renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null;
export declare function renderWithThemeAndRouter(tree: React.ReactElement, theme?: Theme): renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null;
export declare function renderWithRouter(tree: React.ReactElement): renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null;
export declare function mountWithTheme<C extends React.Component, P = C['props'], S = C['state']>(tree: React.ReactElement<P>): ReactWrapper<P, S, C>;
export declare function mountWithThemeAndRouter<C extends React.Component, P = C['props'], S = C['state']>(tree: React.ReactElement<P>): ReactWrapper<P, S, C>;
//# sourceMappingURL=testRenderer.d.ts.map