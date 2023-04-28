import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(
  `${process.env.API_V2_BASE_URL}/graphql`,
  {
    credentials: 'include',
    headers: {
      'x-organization': '1',
    },
  }
);

export const api = createApi({
  reducerPath: 'graphQL',
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({} as any),
});
