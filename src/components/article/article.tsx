import { ReactNode } from 'react';

import { BackButton } from '@components/utils/back-button';

export const Article = ({ title, children }: { title: string, children: ReactNode }): JSX.Element => {

    return (
        <>
            <article className="blog-post">
                <h1 className="blog-post-title">{title}<span>.</span></h1>
                <article className="blog-post-content">
                    {children}
                    <br />
                    <div>
                        <BackButton className="back-to-blog">← Back</BackButton>
                    </div>
                </article>
            </article>
        </>
    );
};
