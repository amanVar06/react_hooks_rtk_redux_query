import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";
import { cryptoNewsApi } from "../services/cryptoNewsApi";
import { newsApi } from "../services/news";
import { videosApi } from "../services/videos";
import { stockApi } from "../services/stockApi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [videosApi.reducerPath]: videosApi.reducer,
    [stockApi.reducerPath]: stockApi.reducer,
  },
});
