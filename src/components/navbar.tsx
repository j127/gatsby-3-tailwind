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
        <nav>
            <ul>
                <li>
                    <Link to="/">{site.siteMetadata.title}</Link>{" "}
                    <Link to="/about/">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
