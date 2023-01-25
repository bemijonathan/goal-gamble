import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "YOUR_GRAPHQL_ENDPOINT",
  }),
});

export default client;
