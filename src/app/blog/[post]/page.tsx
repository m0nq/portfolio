'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import { ReactElement } from 'react';
import moment from 'moment';

import { Post } from '@data-types/data-props';
import { Section } from '@components/section/Section';
import { BackButton } from '@components/utils/BackButton';
import { getPost } from '@components/utils/api';

const BlogPost = ({ params: { post: postUri } }: { params: { post: string } }): ReactElement => {
    const [post, setPost] = useState({} as Post);

    useEffect(() => {
        (async () => {
            setPost(await getPost(postUri));
        })();
    }, [postUri]);

    return (
        <Section>
            <article className="blog-post">
                <h1 className="blog-post-title">{post.title}<span>.</span></h1>
                <p className="blog-post-date">{moment(post.date).format('MMMM Do, YYYY')}</p>
                <article className="blog-post-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                    </div>
                    <br />
                    <div>
                        <BackButton className="back-to-blog">← Back</BackButton>
                    </div>
                </article>
            </article>
        </Section>
    );
};

export default BlogPost;
