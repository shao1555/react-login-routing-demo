import React from 'react';
import Layout from '../Layout';
type Props = {
    currentUser: string;
}

const Page2 = ({ currentUser }: Props) => {
    return <Layout currentUser={currentUser}><p>page2</p></Layout>
};

export default Page2;
