import { ReactElement } from 'react';

import './loading.styles.css';

export const Loading = (): ReactElement => {
    return (
        <>
            {/*<main className="text-center">*/}
            <h2 className="text-center text-primary">Loading...</h2>
            <p>🔄</p>
            {/*</main>*/}
        </>
    );
};
