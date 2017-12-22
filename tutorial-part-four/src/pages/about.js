import React from "react"

export default ({ data }) => (
    <div>
        <h1>{data.site.siteMetadata.title}</h1>
        <p>We only show content with pandas.</p>
    </div>
)

export const query = graphql`
    query AboutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;