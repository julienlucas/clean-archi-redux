import { Training } from '@andragog/domain/entities/trainings-types';
import { StatusEnum } from './utils';

export const STATUS_KEYS = [
  'getTrainingStatus',
  'getTrainingListsStatus',
  'createTrainingStatus',
  'updateTrainingStatus',
] as const;

export const ERRORS_KEYS = [
  'getTrainingErrorMessage',
  'getTrainingListsErrorMessage',
  'createTrainingErrorMessage',
  'updateTrainingErrorMessage',
] as const;

export interface TrainingState {
  data: Training;
  status: Record<(typeof STATUS_KEYS)[number], StatusEnum>;
  errors: Record<(typeof ERRORS_KEYS)[number], string>;
}
