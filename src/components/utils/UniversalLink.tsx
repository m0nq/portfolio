import React from 'react';
import { type ReactNode } from 'react';
import Link from 'next/link';

export const UniversalLink = ({
    children,
    to,
    activeClassName,
    partiallyActive,
    ...other
}: {
    children: ReactNode,
    to: string,
    activeClassName?: string,
    partiallyActive?: boolean,
    other?: any
}) => {

    if (to.match(/^\/(?!\/)/)) {
        return (
            <Link href={to}
                className={activeClassName}
                {...other}>
                {children}
            </Link>
        );
    }

    return (
        <a href={to} className={activeClassName} {...other} target="_blank">
            {children}
        </a>
    );
};
