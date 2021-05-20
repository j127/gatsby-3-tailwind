import * as React from "react";

import Layout from "../components/layout";
import Metadata from "../components/metadata";

const AboutPage: React.FC = (): JSX.Element => {
    return (
        <Layout>
            <Metadata title="About Page" description="This is the About page" />

            <h1>About Page</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, eius ea ipsam, consectetur, deleniti ullam error
                excepturi assumenda repellendus asperiores voluptatem
                reprehenderit facilis est recusandae sit quidem! Totam, veniam
                debitis?
            </p>
        </Layout>
    );
};

export default AboutPage;
