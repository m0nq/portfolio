import moment from 'moment';
import Link from 'next/link';

import { getPosts } from '@components/utils/api';
import { PostResult } from '@components/utils/api';
import { getPost } from '@components/utils/api';
import { Section } from '@components/section/Section';

// TODO: Get this to work.
// export const dynamicParams = false;

export const generateStaticParams = async (): Promise<{ post: string }[]> => {
    const posts = await getPosts();

    return posts.map(({ uri }: PostResult) => ({ post: uri }));
};

const BlogPost = async ({ params: { post: postUri } }: { params: { post: string } }) => {
    const post: PostResult = await getPost(postUri);

    return (
        <Section>
            <article className="blog-post">
                <h1 className="blog-post-title">{post.title}</h1>
                <p className="blog-post-date">{moment(post.date).format('MMMM Do, YYYY')}</p>
                <article className="blog-post-content">
                    <div>
                        <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
                    </div>
                    <br />
                    <div>
                        <Link href={'/blog'} className="back-to-blog">← Back to Blog</Link>
                    </div>
                </article>
            </article>
        </Section>
    );
};

export default BlogPost;
