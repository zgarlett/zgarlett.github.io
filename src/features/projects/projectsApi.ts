import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Project } from './types'

export const projectsApi = createApi({
  reducerPath: 'projectsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProjects: builder.query<Project[], void>({
      query: () => '/projects',
    }),
    getProjectById: builder.query<Project, string>({
      query: (id) => `/projects/${id}`,
    }),
  }),
})

export const { useGetProjectsQuery, useGetProjectByIdQuery } = projectsApi
