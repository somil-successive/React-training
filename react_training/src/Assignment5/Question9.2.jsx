// .Create a React component that makes GraphQL queries to retrieve a list of items (e.g., a list of books, movies, or products) from a GraphQL API. Implement pagination for large datasets and display the data in a user-friendly way.
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import FetchLargeDataGraphQL from "./Question9.1";

const link = new HttpLink({
  uri: 'https://geodb-cities-graphql.p.rapidapi.com/',
  headers: {
    "x-rapidapi-key": "7b0553b7b0mshc584db9a76227a1p17ec44jsn43a0d948276a",
    "x-rapidapi-host": "geodb-cities-graphql.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});
const Ques9 = () => {
  return (
    <ApolloProvider client={client}>
      <FetchLargeDataGraphQL />
    </ApolloProvider>
  );
};
export default Ques9