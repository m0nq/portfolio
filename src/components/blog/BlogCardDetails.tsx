import Link from 'next/link';
import moment from 'moment';
import { Suspense } from 'react';

import { Post } from '@data-types/data-props';
import { Loading } from '@components/loading/loading';

export const BlogCardDetails = ({ post }: { post: Post }) => {

    return (
        <Suspense fallback={<Loading />}>
            <div className="blog-card-content">
                <h4>{post.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: post.excerpt || '' }}></div>
                <div className="blog-item">
                    <Link href={`/blog${post.uri}`} className="blog-styles">Read More</Link>
                    <p>{moment(post.date).format('MMMM Do, YYYY')}</p>
                </div>
            </div>
        </Suspense>
    );
};
