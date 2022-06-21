import { ApolloClient, InMemoryCache } from "@apollo/client";

// em uri colocar o endereço da API

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ocmhgd1rz601z79ktpfrv7/master',
  cache: new InMemoryCache()
})