import * as React from 'react';
import type { PageProps } from 'gatsby';

import { Layout } from '@components/layout';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <header>Header</header>
            <main>Main</main>
            <footer>Footer</footer>
        </Layout>
    );
};

export default IndexPage;
