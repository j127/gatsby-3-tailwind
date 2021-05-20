import * as React from "react";

import Layout from "../components/layout";
import Metadata from "../components/metadata";

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <Metadata
                title="Home Page"
                description="This is the home page"
                isHomepage={true}
            />
            <h1>Hello World</h1>
        </Layout>
    );
};

export default IndexPage;
