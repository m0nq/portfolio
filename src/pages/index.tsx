import * as React from 'react';
import type { PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className="outer-wrapper">
            <div className="inner-container">
                <header>Header</header>
                <main>Main</main>
                <footer>Footer</footer>
            </div>
        </div>
    );
};

export default IndexPage;
