import React from "react";
// import { GlobalStyles } from "twin.macro";
import GlobalStyles from "../styles/GlobalStyles";

import Navbar from "./navbar";

const Layout: React.FC = ({ children, ...rest }) => {
    return (
        <div {...rest}>
            <GlobalStyles />
            <Navbar />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
