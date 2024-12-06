import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    level?: 'h1' | 'h2';
}
declare function PageTitle({ children, level }: Props): react_jsx_runtime.JSX.Element;

declare function StaticText(): react_jsx_runtime.JSX.Element;

export { PageTitle, StaticText };
