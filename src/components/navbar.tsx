import React from "react";

import { Link, useStaticQuery, graphql } from "gatsby";

const Navbar: React.FC = (): JSX.Element => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <nav className="px-4 py-4 mb-4 border-b-2">
            <ul className="flex flex-wrap items-center justify-between">
                <li>
                    <Link to="/">{site.siteMetadata.title}</Link>
                </li>
                <li>
                    <Link to="/about/">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
