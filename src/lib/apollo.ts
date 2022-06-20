import { ApolloClient } from "@apollo/client";

export const client = new ApolloClient(
  // em uri colocar o endereço da API
  uri: '',
  cache: new InMemoryCache()

)