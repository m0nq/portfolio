import { getPosts } from '@components/utils/api';
import { PostResult } from '@components/utils/api';
import { getPost } from '@components/utils/api';

// TODO: Get this to work.
// export const dynamicParams = false;

export const generateStaticParams = async (): Promise<{ post: string }[]> => {
    const posts = await getPosts();

    return posts.map(({ uri }: PostResult) => ({ post: uri }));
};

const BlogPost = async ({ params: { post: postUri } }: { params: { post: string } }) => {
    const post = await getPost(postUri);

    console.log('params ->', post);
    return (
        <>
            <main>Soon... 👀</main>
        </>
    );
};

export default BlogPost;
