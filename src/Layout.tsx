import React from "react";

type Props = {
    currentUser: string;
    children: JSX.Element;
};

const Layout = ({ currentUser, children}: Props) => {
    return(
        <>
          <p>hello, {currentUser}.</p>
          { children }
        </>
    )
}

export default Layout;
