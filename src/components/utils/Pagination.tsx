import * as React from 'react';

import { UniversalLink } from '@components/utils/UniversalLink';

export const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath } = pageContext;
    return (
        <nav className="flex my-12 mx-auto py-0 px-8 justify-center">
            <div className="m-4 grow-0 shrink-0 basis-96">
                {previousPagePath && <UniversalLink to={previousPagePath}>← Newer Posts</UniversalLink>}
            </div>

            <div className="m-4 grow-0 shrink-0 basis-96">
                {nextPagePath && <UniversalLink to={nextPagePath}>Older Posts →</UniversalLink>}
            </div>
        </nav>
    );
};
