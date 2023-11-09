import React from "react";


import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import FetchData1 from "./Question9.2";
const link = new HttpLink({
  uri: "https://star-wars-graphql-dont-change.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "10daac3d78msh6b0ad67e451f6f0p139f95jsna05747bec7f3",
    "x-rapidapi-host": "star-wars-graphql-dont-change.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const ApolloProvider2 = () => {
  return (
    
    <ApolloProvider client={client}>
      <FetchData1/>
    </ApolloProvider>
  );
};

export default ApolloProvider2;
