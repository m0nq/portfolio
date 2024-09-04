import { ReactElement } from 'react';
import { ImSpinner2 } from 'react-icons/im';

import './loading.styles.css';

export const Loading = (): ReactElement => {
    return (
        <>
            <ImSpinner2 className="animate-spin mx-auto align-middle" size={20} />
        </>
    );
};
