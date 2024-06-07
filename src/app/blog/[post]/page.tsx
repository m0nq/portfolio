export const dynamicParams = false;

export const generateStaticParams = async () => {
    return [{ post: '1' }, { post: '2' }, { post: '3' }];
};

const Post = ({ params }: { params: { post: string } }) => {
    console.log('params ->', params);
    return (
        <>
            <main>This is post #{params.post}</main>
        </>
    );
};

export default Post;
