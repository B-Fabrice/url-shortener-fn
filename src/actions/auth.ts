import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth'
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserAuth, User>({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user
      })
    }),
    register: builder.mutation<UserAuth, User>({
      query: (user) => ({
        url: '/register',
        method: 'POST',
        body: user
      })
    }),
    logout: builder.mutation<void, string>({
      query: (refresh) => ({
        url: '/logout',
        method: 'POST',
        body: {refresh}
      })
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation
} = authApi