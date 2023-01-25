import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://yh-finance.p.rapidapi.com/stock/v2/get-chart";
const stockApiHeaders = {
  "X-RapidAPI-Key": "e859b2517amsh47321229900d36ep1230fdjsnb8729fc29a51",
  "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: stockApiHeaders });

export const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: ({ symbol, interval, range, region }) =>
        createRequest(
          `?interval=${interval}&symbol=${symbol}&range=${range}&region=${region}`
        ),
    }),
  }),
});

export const { useGetStocksQuery } = stockApi;
