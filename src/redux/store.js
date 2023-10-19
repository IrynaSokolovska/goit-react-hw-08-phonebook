import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';

import { authReducer } from 'redux/auth/auth-slice';
import { contactsReducer } from './contactsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
// -----------------------------------------------------------
// import { configureStore } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice';
// import { contactsReducer } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });
//  import { combineReducers } from '@reduxjs/toolkit';
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = { key: 'root', storage };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
