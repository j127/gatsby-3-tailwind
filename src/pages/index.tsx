import * as React from "react";

import Layout from "../components/layout";
import Metadata from "../components/metadata";

import Button from "../components/button";

const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Metadata
                title="Home Page"
                description="This is the home page"
                isHomepage={true}
            />
            <h1 className="title">Hello World</h1>
            <p>
                The code is{" "}
                <a href="https://github.com/j127/gatsby-3-tailwind">here</a>.
            </p>
            <p>
                <Button>click me</Button>
            </p>
        </Layout>
    );
};

export default IndexPage;
