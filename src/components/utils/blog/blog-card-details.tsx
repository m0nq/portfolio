import Link from 'next/link';
import moment from 'moment';

import './blog-card-details.styles.css';
import { Post } from '@data-types/data-props';

export const BlogCardDetails = ({ post }: { post: Post }) => {

    return (
        <div className="blog-card-content">
            <h4>{post.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt || '' }}></div>
            <div className="blog-item">
                <Link href={`/blog${post.uri}`} className="blog-styles">Read More</Link>
                <p>{moment(post.date).format('MMMM Do, YYYY')}</p>
            </div>
        </div>
    );
};
