import React from 'react';
import type { PageProps } from 'gatsby';

import { Layout } from '@components/layout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <main>Main</main>
        </Layout>
    );
};

export default IndexPage;
