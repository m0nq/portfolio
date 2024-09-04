import { ReactNode } from 'react';

import './globals.css';

const Template = ({ children }: { children: ReactNode }) => {
    return (
        <div className="page-template">
            {children}
        </div>
    );
};

export default Template;
