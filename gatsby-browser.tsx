import React from 'react';

import './src/styles/global.css';
import { Layout } from './src/components/Layout';
import { ContactProvider } from './src/contexts/Contact.context';
import { ScrollProvider } from './src/contexts/Scroll.context';

export const wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    );
};

export const wrapRootElement = ({ element, props }) => {
    return (
        <ScrollProvider {...props}>
            <ContactProvider {...props}>
                {element}
            </ContactProvider>
        </ScrollProvider>
    );
};
