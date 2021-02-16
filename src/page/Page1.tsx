import React from 'react';
import Layout from '../Layout';
type Props = {
    currentUser: string;
}

const Page1 = ({ currentUser }: Props) => {
    return <Layout currentUser={currentUser}><p>page1</p></Layout>
};

export default Page1;
