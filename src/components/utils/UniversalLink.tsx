import React from 'react';
import { type ReactNode } from 'react';
import { Link } from 'gatsby';

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
            <Link to={to}
                className={activeClassName}
                activeClassName={activeClassName}
                partiallyActive={partiallyActive}
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
