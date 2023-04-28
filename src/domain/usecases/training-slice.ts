import { TrainingState } from '@andragog/domain/entities/training-types';
import {
  Disability,
  Training,
  TrainingConfiguration,
} from '@andragog/domain/entities/trainings-types';
import { StatusEnum } from '@andragog/domain/entities/utils';
import { myTrainings } from '@andragog/domain/usecases/trainings-slice';
import { api as archiveTrainingApi } from '@andragog/infrastructure/api/mutations/ArchiveTraining.generated';
import { api as createTrainingApi } from '@andragog/infrastructure/api/mutations/CreateTraining.generated';
import { api as deleteTrainingApi } from '@andragog/infrastructure/api/mutations/DeleteTraining.generated';
import { api as publishTrainingApi } from '@andragog/infrastructure/api/mutations/PublishTraining.generated';
import { api as updateTrainingApi } from '@andragog/infrastructure/api/mutations/UpdateTraining.generated';
import { api as getTrainingApi } from '@andragog/infrastructure/api/queries/GetTraining.generated';

import {
  Dispatch,
  Draft,
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';

const initialState: TrainingState = {
  data: {} as Training,
  status: {
    getTrainingStatus: StatusEnum.IDLE,
    createTrainingStatus: StatusEnum.IDLE,
    updateTrainingStatus: StatusEnum.IDLE,
  },
  errors: {
    getTrainingErrorMessage: '',
    getTrainingListsErrorMessage: '',
    createTrainingErrorMessage: '',
    updateTrainingErrorMessage: '',
  },
  trainingIdStatusToChange: undefined,
};

export const TrainingSlice = createSlice({
  name: 'training',
  initialState,
  reducers: {
    setTraining: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.data>
    ) => {
      state.status.getTrainingStatus = StatusEnum.RESOLVED;
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getTraining.pending, (state, _) => {
        state.status.getTrainingStatus = StatusEnum.PENDING;
        state.errors.getTrainingErrorMessage = '';
      })
      .addCase(getTraining.fulfilled, (state, action) => {
        state.status.getTrainingStatus = StatusEnum.RESOLVED;
        state.errors.getTrainingErrorMessage = '';
        state.data = action.payload.data;
      })
      .addCase(getTraining.rejected, (state, action) => {
        state.status.getTrainingStatus = StatusEnum.REJECTED;
        state.errors.getTrainingErrorMessage = action.error.message;
      })
      .addCase(createTraining.pending, (state, _) => {
        state.status.createTrainingStatus = StatusEnum.PENDING;
        state.errors.createTrainingErrorMessage = '';
      })
      .addCase(createTraining.fulfilled, (state, action) => {
        state.status.createTrainingStatus = StatusEnum.RESOLVED;
        state.errors.createTrainingErrorMessage = '';
        state.data = action.payload;
      })
      .addCase(createTraining.rejected, (state, action) => {
        state.status.createTrainingStatus = StatusEnum.REJECTED;
        state.errors.createTrainingErrorMessage = action.error.message;
      })
      .addCase(updateTraining.pending, (state, _) => {
        state.status.updateTrainingStatus = StatusEnum.PENDING;
        state.errors.updateTrainingErrorMessage = '';
      })
      .addCase(updateTraining.fulfilled, (state, action) => {
        state.status.updateTrainingStatus = StatusEnum.RESOLVED;
        state.errors.updateTrainingErrorMessage = '';
        state.data = action.payload.data;
      })
      .addCase(updateTraining.rejected, (state, action) => {
        state.status.updateTrainingStatus = StatusEnum.REJECTED;
        state.errors.updateTrainingErrorMessage = action.error.message;
      });
  },
});

export const getTraining = createAsyncThunk(
  'api/getTraining',
  async (
    {
      trainingId,
    }: {
      trainingId: number;
      fetchThumbnail?: boolean;
      isConfiguration?: boolean;
    },
    {
      rejectWithValue,
      dispatch,
    }: { rejectWithValue: any; dispatch: Dispatch<any> }
  ): Promise<{
    data: any;
    configuration?: TrainingConfiguration | undefined;
  }> => {
    try {
      const res = (await dispatch(
        getTrainingApi.endpoints.getTraining.initiate(
          { id: trainingId },
          { forceRefetch: true }
        )
      )) as any;

      return res.data.getTraining;
    } catch (e) {
      return rejectWithValue("Couldn't get training");
    }
  }
);

export const updateTraining = createAsyncThunk(
  'api/updateTraining',
  async (
    {
      training,
      updateState = false,
    }: { training: Partial<Training>; updateState?: boolean },
    {
      rejectWithValue,
      dispatch,
    }: { rejectWithValue: any; dispatch: Dispatch<any> }
  ): Promise<{ data: Training; updateState: boolean }> => {
    try {
      const res = (await dispatch(
        updateTrainingApi.endpoints.updateTraining.initiate(training)
      )) as any;
      return { data: res.data.updateTraining, updateState };
    } catch (e) {
      return rejectWithValue("Couldn't update training");
    }
  }
);

export const createTraining = createAsyncThunk(
  'api/createTraining',
  async (
    { title }: { title: string },
    {
      rejectWithValue,
      dispatch,
    }: { rejectWithValue: any; dispatch: Dispatch<any> }
  ): Promise<Training> => {
    try {
      const res = await dispatch(
        createTrainingApi.endpoints.createTraining.initiate({ title })
      );

      return res.data.createTraining;
    } catch (e) {
      return rejectWithValue("Couldn't create training");
    }
  }
);

export const deleteTraining = createAsyncThunk(
  'api/deleteTraining',
  async (
    trainingId: number,
    {
      rejectWithValue,
      dispatch,
    }: { rejectWithValue: any; dispatch: Dispatch<any> }
  ): Promise<void> => {
    try {
      (await dispatch(
        deleteTrainingApi.endpoints.deleteTraining.initiate({ trainingId })
      )) as any;
      dispatch(myTrainings());
    } catch (e) {
      return rejectWithValue("Couldn't delete training");
    }
  }
);

export const publishTraining = createAsyncThunk(
  'api/archiveTraining',
  async (
    trainingId: number,
    {
      rejectWithValue,
      dispatch,
    }: { rejectWithValue: any; dispatch: Dispatch<any> }
  ): Promise<void> => {
    try {
      await dispatch(
        publishTrainingApi.endpoints.publishTraining.initiate({ trainingId })
      );
      dispatch(getTraining({ trainingId }));
    } catch (e) {
      return rejectWithValue("Couldn't publish training");
    }
  }
);

export const archiveTraining = createAsyncThunk(
  'api/archiveTraining',
  async (
    trainingId: number,
    {
      rejectWithValue,
      dispatch,
    }: { rejectWithValue: any; dispatch: Dispatch<any> }
  ): Promise<void> => {
    try {
      (await dispatch(
        archiveTrainingApi.endpoints.archiveTraining.initiate({ trainingId })
      )) as any;
      dispatch(myTrainings());
    } catch (e) {
      return rejectWithValue("Couldn't archive training");
    }
  }
);

export const addTraining =
  (cb: (trainingId: number) => void) => (dispatch: any, getState: any) => {
    dispatch(createTraining({ title: '' })).then(() => {
      const trainingId = getState().training.data.id;

      if (trainingId) {
        cb(trainingId);
      }
    });
  };

export const isValidTraining = (training: Training) =>
  training?.isValid || false;

export const selectTrainingState = (state: { training: TrainingState }) =>
  state.training;

export const selectTraining = createSelector(
  selectTrainingState,
  ({ data }) => data
);

export const selectTrainingAdaptiveLearning = createSelector(
  selectTrainingState,
  ({ data }) => data?.adaptiveLearning
);

export const selectTrainingDisability = createSelector(
  selectTrainingState,
  ({ data }) => data?.disabilities[0] || Disability.NONE
);

export const selectTrainingIsValid = createSelector(
  selectTrainingState,
  ({ data }) => isValidTraining(data)
);

export const selectTrainingColorScheme = createSelector(
  selectTrainingState,
  ({ data }) => data?.colorScheme || 0
);

export const selectTrainingGeneralThematics = createSelector(
  selectTrainingState,
  ({ data }) => data?.generalThematics || []
);

export const selectTrainingId = createSelector(
  selectTrainingState,
  ({ data }) => data?.id || ''
);

export const selectTrainingOrgThematics = createSelector(
  selectTrainingState,
  ({ data }) => data?.orgThematics || []
);

export const selectTrainingQualifications = createSelector(
  selectTrainingState,
  ({ data }) => data?.qualifications || []
);

export const selectTrainingScreenSizes = createSelector(
  selectTrainingState,
  ({ data }) => data?.screenSizes || []
);

export const selectTrainingSkills = createSelector(
  selectTrainingState,
  ({ data }) => data?.skills || []
);

export const selectTrainingTargets = createSelector(
  selectTrainingState,
  ({ data }) => data?.targets || []
);

export const selectTrainingTheme = createSelector(
  selectTrainingState,
  ({ data }) => data?.theme || {}
);

export const selectTrainingTitle = createSelector(
  selectTrainingState,
  ({ data }) => data?.title || ''
);

export default TrainingSlice.reducer;
