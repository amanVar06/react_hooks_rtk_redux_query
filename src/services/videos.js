import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const videosApiHeaders = {
  "X-User-Agent": "desktop",
  "X-Proxy-Location": "EU",
  "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
  "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
};

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";
const createRequest = (url) => ({ url, headers: videosApiHeaders });

export const videosApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: ({ searchTerm }) => createRequest(`/video/q=${searchTerm}`),
    }),
  }),
});

export const { useGetVideosQuery } = videosApi;
