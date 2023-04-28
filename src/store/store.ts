import trainingSlice from '@andragog/domain/usecases/training-slice';
import trainingsSlice from '@andragog/domain/usecases/trainings-slice';
import { api as GraphQLAPI } from '@andragog/infrastructure/api/baseApi';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'reduxjs-toolkit-persist/lib/storage';

import {
  EqualityFn,
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'reduxjs-toolkit-persist';

export const reducer = combineReducers({
  trainings: trainingsSlice,
  training: trainingSlice,
  [GraphQLAPI.reducerPath]: GraphQLAPI.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [GraphQLAPI.reducerPath],
  whitelist: ['dataValidation', 'trainings', 'training', 'modules', 'module'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([GraphQLAPI.middleware]),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
  equalityFn?: EqualityFn<TSelected> | undefined
): TSelected => useSelectorBase<RootState, TSelected>(selector, equalityFn);
