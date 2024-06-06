import { ReactNode } from 'react';

export interface Props {
    params?: { id: string }
    searchParams?: { [key: string]: string | string[] | undefined }
    children?: ReactNode;
}
