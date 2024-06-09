import moment from 'moment';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

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
    const cleanedContent = DOMPurify.sanitize(post.content || '', { ALLOWED_TAGS: ['a'] });

    return (
        <Section classes="">
            {/*<article className="blog-post">*/}
            <article className="">
                <h1>{post.title}</h1>
                <p>{moment(post.date).format('MMMM Do, YYYY')}</p>
                <article>
                    <div>
                        <p dangerouslySetInnerHTML={{ __html: cleanedContent }}></p>
                    </div>
                    <br />
                    <div>
                        <Link href={'/blog'}>← Go Back</Link>
                    </div>
                </article>
            </article>
        </Section>
    );
};

export default BlogPost;
