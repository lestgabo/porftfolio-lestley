import { graphql, useStaticQuery } from 'gatsby';

const TagsQuery = () => {
    const data = useStaticQuery(graphql`
        query {
            allPost(sort: { fields: date, order: DESC }) {
                group(field: tags___name) {
                    fieldValue
                    totalCount
                }
            }
        }
    `);
    return data.allPost.group;
};

export default TagsQuery;
