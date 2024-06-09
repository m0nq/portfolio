import Link from 'next/link';
import moment from 'moment';
import { Suspense } from 'react';
import DOMPurify from 'isomorphic-dompurify';

import { PostResult } from '@components/utils/api';
import { Loading } from '@components/loading/Loading';

export const BlogCardDetails = ({ post }: { post: PostResult }) => {
    const cleanedExcerpt = DOMPurify.sanitize(post.excerpt || '', { ALLOWED_TAGS: ['a'] });

    return (
        <Suspense fallback={<Loading />}>
            <div>
                <h4>{post.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: cleanedExcerpt }}></p>
                <div className="blog-item">
                    <Link href={`/blog${post.uri}`} className="blog-styles">Read More</Link>
                    <p>{moment(post.date).format('MMMM Do, YYYY')}</p>
                </div>
            </div>
        </Suspense>
    );
};
