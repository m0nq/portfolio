import React from 'react';
import { type ReactNode } from 'react';
import { Link as GatsbyLink } from 'gatsby';

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
            <GatsbyLink to={to} activeClassName={activeClassName} partiallyActive={partiallyActive} {...other}>
                {children}
            </GatsbyLink>
        );
    }

    return (
        <a href={to} className={activeClassName} {...other} target="_blank">
            {children}
        </a>
    );
};
