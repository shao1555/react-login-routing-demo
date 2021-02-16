import React from 'react';
import { Button } from 'antd';

type Props = {
    onLoginComplete: (user: string) => void;
}

const LoginPage = ({ onLoginComplete }: Props) => {
    return <Button onClick={() => onLoginComplete('shao')}>Google Login</Button>
}

export default LoginPage;
