import { ReactNode } from 'react';
import { ReactElement } from 'react';

import './article.styles.css';
import { BackButton } from '@components/utils/back-button/back-button';

export const Article = ({ title, children }: { title: string, children: ReactNode }): ReactElement => {

    return (
        <>
            <article className="post">
                <h1 className="post-title">{title}<span>.</span></h1>
                <article className="post-content">
                    {children}
                    <br />
                    <div>
                        <BackButton>← Back</BackButton>
                    </div>
                </article>
            </article>
        </>
    );
};
