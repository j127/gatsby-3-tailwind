import React from "react";

import Navbar from "./navbar";

const Layout: React.FC = ({ children }): JSX.Element => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    );
};

export default Layout;
