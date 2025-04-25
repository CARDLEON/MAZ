import { GraphQLClient } from "graphql-request";

export const grapQLClient = new GraphQLClient(
  import.meta.env.WP_GRAPHQL_ENDPOINT,
)