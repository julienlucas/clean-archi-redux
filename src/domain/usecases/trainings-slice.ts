import { TrainingsState } from '@andragog/domain/entities/trainings-types';
import { StatusEnum } from '@andragog/domain/entities/utils';
import { api as myTrainingApi } from '@andragog/infrastructure/api/queries/MyTrainings.generated';
import {
  Dispatch,
  Draft,
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

const initialState: TrainingsState = {
  data: [],
  status: {
    getTrainingsStatus: StatusEnum.IDLE,
  },
  errors: {
    getTrainingsErrorMessage: '',
  },
};

export const TrainingsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setTrainings: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.data>
    ) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(myTrainings.pending, (state, _) => {
        state.status.getTrainingsStatus = StatusEnum.PENDING;
        state.errors.getTrainingsErrorMessage = '';
      })
      .addCase(myTrainings.fulfilled, (state, action) => {
        state.status.getTrainingsStatus = StatusEnum.RESOLVED;
        state.errors.getTrainingsErrorMessage = '';
        state.data = action.payload;
      })
      .addCase(myTrainings.rejected, (state, _) => {
        state.status.getTrainingsStatus = StatusEnum.REJECTED;
        state.errors.getTrainingsErrorMessage = '';
      });
  },
});

export const myTrainings = createAsyncThunk(
  'api/myTrainings',
  async (
    _,
    {
      rejectWithValue,
      dispatch,
    }: { rejectWithValue: any; dispatch: Dispatch<any> }
  ): Promise<TrainingsState> => {
    try {
      const res = dispatch(
        myTrainingApi.endpoints.myTrainings.initiate()
      ) as any;
      res.refetch();
    } catch (e) {
      console.error('Erreur lors du fetch training : ', e);
      return rejectWithValue("Couldn't get training");
    }
  }
);

const selectTrainingsState = (state: { trainings: TrainingsState }) =>
  state.trainings;

export const { setTrainings } = TrainingsSlice.actions;

export const selectTrainings = createSelector(
  selectTrainingsState,
  ({ data }) => data
);

export default TrainingsSlice.reducer;
