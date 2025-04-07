import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import userSlice from '@/slices/user'
import { authApi } from '@/actions/auth'
import { linkApi } from '@/actions/link'


const persistConfig = {
  key: 'root_v1',
  storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  user: userSlice,
  [authApi.reducerPath]: authApi.reducer,
  [linkApi.reducerPath]: linkApi.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat([
    authApi.middleware,
    linkApi.middleware
  ])
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch