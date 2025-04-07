import { RootState } from '@/store'
import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'linkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/shorten',
    prepareHeaders: (headers, { getState } : { getState: BaseQueryApi['getState'], endpoint: string }) => {
      const state = getState() as RootState
      const token = state.user.tokens?.access
      headers.set('Authorization', `Bearer ${token}`)
      return headers
    }
  }),
  endpoints: (builder) => ({
    shorten: builder.mutation<ShortenLink, string>({
      query: (original_url) => ({
        url: '/',
        method: 'POST',
        body: {original_url}
      })
    }),
    myLinks: builder.query<ShortenLink[], void>({
      query: () => '/urls'
    })
  })
})

export const {
  useShortenMutation,
  useMyLinksQuery
} = authApi