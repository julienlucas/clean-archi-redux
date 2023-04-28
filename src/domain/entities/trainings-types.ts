import { Session } from '@andragog/domain/entities/sessions-types';

import { StatusEnum } from './utils';

export const STATUS_KEYS = ['getTrainingsStatus'] as const;
export const ERRORS_KEYS = ['getTrainingsErrorMessage'] as const;

export interface TrainingsState {
  data: Training[];
  status: Record<(typeof STATUS_KEYS)[number], StatusEnum>;
  errors: Record<(typeof ERRORS_KEYS)[number], string>;
}

export enum Role {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  EMPLOYEE = 'EMPLOYEE',
  EXTERNAL_DESIGNER = 'EXTERNAL_DESIGNER',
  INTERNAL_DESIGNER = 'INTERNAL_DESIGNER',
}

export enum Language {
  ENGLISH = 'ENGLISH',
  FRENCH = 'FRENCH',
}

export enum Modality {
  E_LEARNING = 'E_LEARNING',
  PRESENTIAL = 'PRESENTIAL',
  VIRTUAL_CLASSROOM = 'VIRTUAL_CLASSROOM',
  MICRO_LEARNING = 'MICRO_LEARNING',
}

export enum ScreenSize {
  DESKTOP = 'DESKTOP',
  TABLET = 'TABLET',
  MOBILE = 'MOBILE',
}

export enum ActivityType {
  MCQ = 'MCQ',
  MCQ_IMAGE = 'MCQ_IMAGE',
  MCQ_AUDIO = 'MCQ_AUDIO',
  SINGLE_ANSWER = 'SINGLE_ANSWER',
  IMAGE_AND_TEXT = 'IMAGE_AND_TEXT',
  DOCUMENT = 'DOCUMENT',
  LOGO = 'LOGO',
  VIDEO = 'VIDEO',
  TEXT = 'TEXT',
  SORTING = 'SORTING',
  MATCHING = 'MATCHING',
  ADAPTIVE_CARDS = 'ADAPTIVE_CARDS',
  HOT_SPOT = 'HOT_SPOT',
  HOT_SPOT_QUESTION = 'HOT_SPOT_QUESTION',
}

export enum ActivityErrorType {
  MISSING_MEDIA = 'MISSING_MEDIA',
  TITLE_LENGTH = 'TITLE_LENGTH',
  QUESTION_LENGTH = 'QUESTION_LENGTH',
  ANSWERS_MIN_COUNT = 'ANSWERS_MIN_COUNT',
  ANSWERS_MIN_LENGTH = 'ANSWERS_MIN_LENGTH',
  ANSWERS_FEEDBACK_MIN_LENGTH = 'ANSWERS_FEEDBACK_MIN_LENGTH',
  ANSWERS_MISSING_MEDIA = 'ANSWERS_MISSING_MEDIA',
  CARDS_MIN_COUNT = 'CARDS_MIN_COUNT',
  CARDS_INVALID_TEXT = 'CARDS_INVALID_TEXT',
  REQUIRED_TITLE = 'REQUIRED_TITLE',
  REQUIRED_QUESTION = 'REQUIRED_QUESTION',
  REQUIRED_TEXT = 'REQUIRED_TEXT',
  HOTSPOT_MIN_COUNT = 'HOTSPOT_MIN_COUNT',
  HOTSPOT_REQUIRED_TITLE = 'HOTSPOT_REQUIRED_TITLE',
  HOTSPOT_DESCRIPTION_MIN_LENGTH = 'HOTSPOT_DESCRIPTION_MIN_LENGTH',
  ADAPTIVE_CARDS_LIST_TITLE_LENGTH = 'ADAPTIVE_CARDS_LIST_TITLE_LENGTH',
  ADAPTIVE_CARDS_VALID_ANSWERS_MIN_COUNT = 'ADAPTIVE_CARDS_VALID_ANSWERS_MIN_COUNT',
  ADAPTIVE_CARDS_RIGHT_ANSWERS_MIN_COUNT = 'ADAPTIVE_CARDS_RIGHT_ANSWERS_MIN_COUNT',
  ADAPTIVE_CARDS_INVALID_TEXT = 'ADAPTIVE_CARDS_INVALID_TEXT',
  ADAPTIVE_CARDS_MISSING_MEDIA = 'ADAPTIVE_CARDS_MISSING_MEDIA',
  MULTIPLE = 'MULTIPLE',
}

export enum ModuleErrorType {
  TITLE_REQUIRED = 'TITLE_REQUIRED',
  TITLE_LENGTH = 'TITLE_LENGTH',
  ACTIVITIES_COUNT = 'ACTIVITIES_COUNT',
  INVALID_ACTIVITIES = 'INVALID_ACTIVITIES',
}

export enum EditableTitleType {
  INFORMATIVE = 'INFORMATIVE',
  EVALUATIVE = 'EVALUATIVE',
}

export enum LearnerType {
  COMPLETED = 'COMPLETED',
  ANSWERED = 'ANSWERED',
  STARTED = 'STARTED',
  EXITED = 'EXITED',
}

export enum ViewMode {
  SCROLL = 'SCROLL',
  SLIDE = 'SLIDE',
}

export enum State {
  CONCEPT = 'CONCEPT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export enum Disability {
  NONE = 'NONE',
  HARD_OF_HEARING = 'HARD_OF_HEARING',
  VISUALLY_IMPAIRED = 'VISUALLY_IMPAIRED',
  COLORBLIND = 'COLORBLIND',
  HARD_OF_HEARING_VISUALLY_IMPAIRED = 'HARD_OF_HEARING_VISUALLY_IMPAIRED',
}

enum TrainingState {
  CONCEPT = 'CONCEPT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
}

export enum ModuleStatus {
  ACTIVE = 'ACTIVE',
  CONCEPT = 'CONCEPT',
}

export enum ActivityStatus {
  CONCEPT = 'CONCEPT',
  ACTIVE = 'ACTIVE',
}

export enum SlotCoachInviteStatus {
  SAVED = 'SAVED',
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REFUSED = 'REFUSED',
}

/**
 * Model User
 *
 */
export type User = {
  id: number;
  createdAt: Date;
  email: string;
  firstname: string | null;
  lastname: string | null;
};

export type Membership = {
  id: number;
  createdAt: Date;
  userId: number;
  organizationId: number;
  role: Role;
};

export type Organization = {
  id: number;
  createdAt: Date;
  name: string;
};

export type TrainingTheme = {
  id: string;
  activityTypes: ActivityType[];
  bundle: Record<string, unknown>;
  fonts: string[];
  devices: ScreenSize;
  version: string;
  dateOfCreation: string;
  author: string;
  disabilities: Disability[];
  colorSchemes: Record<string, unknown>;
  previewImage: string;
  name: string;
  viewMode: ViewMode;
  is3D: boolean;
  isAdaptiveLearning: boolean;
};

export type Profile = {
  firstname: string;
  id: number;
  lastname: string;
  recap: string;
  email: string;
};

export type Author = {
  id: number;
  profile: Profile;
  status: string;
  type: string;
  isEntreprise?: boolean;
  role?: string;
  profilePicture?: string;
};

/**
 * Model Training
 *
 */
export type Training = {
  id: number;
  organizationId: number;
  colorScheme: number;
  createdAt: Date;
  isValid: boolean;
  title: string;
  state: TrainingState;
  description: string;
  author: Author;
  modalities: Modality[];
  adaptiveLearning: boolean;
  screenSizes: ScreenSize[];
  language: Language;
  skills: Skill[];
  generalThematics: Thematic[];
  orgThematics: Thematic[];
  prerequisites: Prerequisite[];
  objectives: Objective[];
  targets: Target[];
  qualifications: Qualification[];
  disabilities: Disability[];
  thumbnail: TrainingThumbnail;
  theme: TrainingTheme;
  modules: Modules;
};

export type TrainingBanner = {
  url: string;
  settings: {
    imageCrop: {
      x: number;
      y: number;
    };
    imageZoom: number;
  };
  miniature: {
    imageCrop: {
      x: number;
      y: number;
    };
    imageZoom: number;
  };
};

export type TrainingConfiguration = {
  id: string;
  title: string;
  colorScheme: number;
  language: string;
  description: string;
  destination: string;
  generalThematics: string[];
  orgThematics: string[];
  skills: string[];
  disabilities: Disability[];
  prerequisites: { value: string }[];
  objectives: { value: string }[];
  qualifications: string[];
  targets: string[];
  modalities: Modality[];
  adaptiveLearning: boolean;
  screenSizes: ScreenSize[];
  theme: {
    id: string;
    colorScheme: number;
  };
};

export type TrainingLists = {
  disabilities: string[];
  qualifications: string[];
  skills: string[];
  targets: string[];
};

export type TrainingThumbnail = {
  id: number;
  path: string;
  trainingId: number;
  zoom: number | null;
  xPosition: number | null;
  yPosition: number | null;
  miniatureZoom: number | null;
  miniatureXPosition: number | null;
  miniatureYPosition: number | null;
};

export type Prerequisite = {
  id: number;
  value: string;
  trainingId: number;
  order: number;
};

export type Objective = {
  id: number;
  value: string;
  trainingId: number;
  order: number;
};

export type Skill = {
  id: number;
  name: string;
  organizationId: number | null;
};

export type Thematic = {
  id: number;
  name: string;
  organizationId: number | null;
};

export type Target = {
  id: number;
  title: string;
  organizationId: number | null;
};

export type Qualification = {
  id: number;
  title: string;
  organizationId: number | null;
};

export type DisabilityDeprecated = {
  id: number;
  name: string;
  organizationId: number | null;
};

export type SignedLink = {
  id: number;
  createdAt: Date;
  validFor: number;
  name: string;
  extension: string;
  link: string;
};

export type Module = {
  id: number;
  author: string;
  name: string;
  totalDuration: number | null;
  modality: Modality;
  position: number;
  activities?: Activity[];
  sessions?: Session[];
  status: ModuleStatus;
  description?: string;
  limitDuration?: number;
  activeActivities?: number;
  conceptActivities?: number;
};

export type Group = {
  id: number;
  moduleId: number;
};

export type LoadableActivity = {
  computedDuration: number;
  hearingImpaired: boolean;
  id: number;
  status: ActivityStatus;
  type: ActivityType;
  userDuration: number;
  visionImpaired: boolean;
};

export type Activity = {
  author: Author;
  duration: number;
  id: number;
  modality: Modality;
  name: string;
  position: number;
  status: ModuleStatus;
  activities: LoadableActivity;
  childActivities: any;
  content: any;
  type: ActivityType;
};

export type ActivityV2 = {
  childActivities: any[];
  computedDuration: number;
  content: any;
  duration: number;
  hearingImpaired: boolean;
  id: number;
  moduleId: number;
  name: ActivityType;
  status: ModuleStatus;
  successorId: number | null;
  type: ActivityType;
  userDuration: null;
  visionImpaired: boolean;
};

export interface CoachInvite {
  id: number;
  coach: string; // Temporary until profile API
  status: SlotCoachInviteStatus;
  type: string;
}

export type Sale = {
  people: number;
  percent: number;
};

export type Learner = {
  id: number;
  type: LearnerType;
};

export type Modules = {
  [k in Modality]?: Module[];
};

export type ThemeFilter = {
  screenSize?: string;
  disability?: string;
  viewMode?: 'SLIDE' | 'SCROLL' | null;
  colorScheme?: 'POLYCHROME' | 'MONOCHROME';
  adaptiveLearning?: boolean;
};

export type Template = {
  id?: string;
  activityTypes: string[];
  bundle: {
    js?: string;
    css?: string;
  };
  fonts: string[];
  devices: string[];
  author: string;
  version: string;
  colorSchemes: {
    [key: number]: string[] | undefined;
  };
  disabilities: string[];
  previewImage: string;
  name: string;
  viewMode: string;
  is3D: boolean;
  isAdaptiveLearning: boolean;
  dateOfCreation: any;
};

export type ActivityItemMenu = {
  name: string;
  srcImage: string;
};
