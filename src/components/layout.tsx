import React from "react";

import Navbar from "./navbar";

const Layout: React.FC = ({ children }): JSX.Element => {
    return (
        <>
            <Navbar />
            <main className="container mx-10">{children}</main>
        </>
    );
};

export default Layout;
