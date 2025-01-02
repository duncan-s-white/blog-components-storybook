import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode, AnchorHTMLAttributes } from 'react';
import { LinkProps } from 'next/link';
import { ImageProps } from 'next/image';

interface Props$3 {
    /** Contents of the Heading */
    children: ReactNode;
    /** Level of importance the Heading */
    level?: 'h1' | 'h2';
}
/** Page Title UI Component */
declare function PageTitle({ children, level }: Props$3): react_jsx_runtime.JSX.Element;

interface Props$2 {
    /** Contents of the paragraph */
    children: ReactNode;
}
/** Paragraph UI Component for displaying Text */
declare function Paragraph({ children }: Props$2): react_jsx_runtime.JSX.Element;

/** Next Link UI Component */
declare const CustomLink: ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => react_jsx_runtime.JSX.Element;

/** Image UI Component */
declare const Image: ({ src, ...rest }: ImageProps) => react_jsx_runtime.JSX.Element;

interface CardLink {
    /** Link location */
    href: string;
    /** Link text */
    text: string;
}
interface Props$1 {
    /** Card Image Source */
    imgSrc: string;
    /** Card Title */
    title: string;
    /** Card Description */
    description?: string;
    /** Main link location */
    mainHref?: string;
    /** Additional Links */
    links?: CardLink[];
    /** Additional css classes */
    className?: string;
}
/** Card with Image UI Component. Can include a link from the image and title and also have additional links */
declare const Card: ({ imgSrc, title, description, mainHref, links, className }: Props$1) => react_jsx_runtime.JSX.Element;

interface Props {
    /** Capitalised and spaces replaced with hyphens */
    text: string;
}
/** Tag Slug UI Component */
declare const Tag: ({ text }: Props) => react_jsx_runtime.JSX.Element;

declare const ThemeSwitch: () => react_jsx_runtime.JSX.Element;

export { Card, Image, CustomLink as Link, PageTitle, Paragraph, Tag, ThemeSwitch };
