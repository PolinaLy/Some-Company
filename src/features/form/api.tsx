import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URLS } from "../../shared/utils/base-url";

export const exampleApi = createApi({
  reducerPath: "exampleApi",

  baseQuery: fetchBaseQuery({ baseUrl: URLS.BASE_URL}),

  endpoints: (builder) => ({
    getExampleRequest: builder.query({
      query: () => `contactdate/1`
    }),

    postExampleRequest: builder.mutation({
      query: (body) => ({
        url: "contactdate",
        method: "POST",
        body
      })
    })
  })
});

export const {
  useGetExampleRequestQuery,
  usePostExampleRequestMutation
} = exampleApi;