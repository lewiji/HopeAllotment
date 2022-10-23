// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: `/where_to_find_us`,
        toPath: `/where-to-find-us`,
        isPermanent: true,
    });
}