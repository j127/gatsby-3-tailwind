import React from "react";

const Layout: React.FC = ({ children }): JSX.Element => {
    console.log("children", children);
    return <div>{children}</div>;
};

export default Layout;
