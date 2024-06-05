import * as React from 'react';

import { UniversalLink } from '@components/utils/UniversalLink';

export const CatList = ({ postObject }) => {
    return (
        <div className="text-center">
            {postObject.categories.nodes.map(category => (
                <UniversalLink key={category.name} to={category.link}>
                    {category.name}
                </UniversalLink>
            )).join(', ')}
        </div>
    );
};
