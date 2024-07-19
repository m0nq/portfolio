import { ReactElement } from 'react';

import { Loading } from '@components/loading/loading';

const PostLoader = async (): Promise<ReactElement> => <Loading />;

export default PostLoader;
