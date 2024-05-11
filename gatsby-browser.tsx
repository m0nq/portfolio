import React from 'react';

import './src/styles/global.css';
import { Layout } from './src/components/layout';
import { ContactProvider } from './src/contexts/Contact.context';

export const wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>
            {element}
        </Layout>
    );
};

export const wrapRootElement = ({ element, props }) => {
    return (
        <ContactProvider {...props}>
            {element}
        </ContactProvider>
    );
};
