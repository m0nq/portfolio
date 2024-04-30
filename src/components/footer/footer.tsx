import React from 'react';
import { ReactElement } from 'react';

export const Footer = (): ReactElement => {
    return (
        <footer>
            <div>@ {new Date().getFullYear()} by Monk Wellington</div>
        </footer>
    );
};

