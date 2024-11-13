import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { filterReducer } from "./filtersSlice";
import { contactsReducer } from "./contactsSlice";

const contactsConfig = {
  key: "contactsKey",
  storage,
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: persistReducer(contactsConfig, contactsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
