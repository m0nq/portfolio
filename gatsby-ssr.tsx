import React from 'react';

import './src/styles/global.css';
import { Layout } from './src/components/Layout';
import { ContactProvider } from './src/contexts/Contact.context';

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
    setPostBodyComponents([
        <div key={pluginOptions.key || 'portal'} id={pluginOptions.id || 'portal'}>
            {pluginOptions.text}
        </div>
    ]);
};

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
