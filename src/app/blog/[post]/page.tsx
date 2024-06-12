import moment from 'moment';

import { getPosts } from '@components/utils/api';
import { getPost } from '@components/utils/api';
import { Post } from '@data-types/data-props';
import { PostEdges } from '@data-types/data-props';
import { Section } from '@components/section/Section';
import { BackButton } from '@components/utils/BackButton';

export const dynamic = 'force-static';

export const generateStaticParams = async (): Promise<{ post: string }[]> => {
    const { posts }: { posts: PostEdges[] } = await getPosts();

    return posts.map(({ post: { uri } }: { post: Post }) => ({ post: uri }));
};

const BlogPost = async ({ params: { post: postUri } }: { params: { post: string } }) => {
    const post: Post = await getPost(postUri);

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
