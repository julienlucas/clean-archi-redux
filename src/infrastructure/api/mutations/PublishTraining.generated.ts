import { api } from '../baseApi';
import * as Types from '../types.generated';

export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  LocalTime: any;
};

export type ActivityContentInput = {
  adaptiveCards?: InputMaybe<AdaptiveCardsInput>;
  audioQuiz?: InputMaybe<AudioQuizInput>;
  document?: InputMaybe<DocumentInput>;
  general?: InputMaybe<GeneralInput>;
  hotspot?: InputMaybe<HotpostInput>;
  hotspotResponseQuiz?: InputMaybe<HotpostResponseQuizInput>;
  image?: InputMaybe<ImageInput>;
  indication?: InputMaybe<IndicationInput>;
  matching?: InputMaybe<MatchingInput>;
  pictureQuiz?: InputMaybe<PictureQuizInput>;
  sorting?: InputMaybe<SortingInput>;
  tabs?: InputMaybe<TabsInput>;
  text?: InputMaybe<TextInput>;
  textQuiz?: InputMaybe<TextQuizInput>;
  textWithImage?: InputMaybe<TextWithGraphicMediaInput>;
  title?: InputMaybe<TitleRootInput>;
  video?: InputMaybe<VideoMediaInput>;
};

export type ActivityInput = {
  computedDuration?: InputMaybe<Scalars['Int']>;
  content: ActivityContentInput;
  hearingImpaired: Scalars['Boolean'];
  name: Scalars['String'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: InputMaybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export enum ActivityStatus {
  Active = 'ACTIVE',
  Concept = 'CONCEPT',
}

export enum ActivityType {
  AdaptiveCards = 'ADAPTIVE_CARDS',
  Document = 'DOCUMENT',
  General = 'General',
  HotSpot = 'HOT_SPOT',
  HotSpotQuestion = 'HOT_SPOT_QUESTION',
  ImageAndText = 'IMAGE_AND_TEXT',
  Indication = 'INDICATION',
  Logo = 'LOGO',
  Matching = 'MATCHING',
  Mcq = 'MCQ',
  McqAudio = 'MCQ_AUDIO',
  McqImage = 'MCQ_IMAGE',
  Sorting = 'SORTING',
  Text = 'TEXT',
  Tabs = 'Tabs',
  Title = 'Title',
  Video = 'VIDEO',
}

export type AdaptiveCardContent = {
  __typename?: 'AdaptiveCardContent';
  correctAnswer: Scalars['Int'];
  items: Array<AdaptiveCardResponse>;
  title: Scalars['String'];
};

export type AdaptiveCardContentInput = {
  correctAnswer: Scalars['Int'];
  items: Array<AdaptiveCardResponseInput>;
  title: Scalars['String'];
};

export type AdaptiveCardResponse = {
  __typename?: 'AdaptiveCardResponse';
  audio?: Maybe<AudioMedia>;
  graphic?: Maybe<GraphicMedia>;
  text: Scalars['String'];
};

export type AdaptiveCardResponseInput = {
  audio?: InputMaybe<AudioMediaInput>;
  graphic?: InputMaybe<GraphicMediaInput>;
  text: Scalars['String'];
};

export type AdaptiveCards = {
  __typename?: 'AdaptiveCards';
  items: Array<AdaptiveCardContent>;
  title: Scalars['String'];
};

export type AdaptiveCardsInput = {
  items: Array<AdaptiveCardContentInput>;
  title: Scalars['String'];
};

export type AssetInput = {
  activityId?: InputMaybe<Scalars['Int']>;
  fileName: Scalars['String'];
  trainingId?: InputMaybe<Scalars['Int']>;
};

export type AssetOutput = {
  __typename?: 'AssetOutput';
  fileName: Scalars['String'];
  uploadUrl: Scalars['String'];
};

export type AudioMedia = {
  __typename?: 'AudioMedia';
  a11y?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
  fileSize?: Maybe<Scalars['Int']>;
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AudioMediaInput = {
  a11y?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  fileSize?: InputMaybe<Scalars['Int']>;
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type AudioQuiz = {
  __typename?: 'AudioQuiz';
  items: Array<AudioResponse>;
  question: Scalars['String'];
  timer?: Maybe<Scalars['Boolean']>;
  timerDuration?: Maybe<Scalars['Int']>;
};

export type AudioQuizInput = {
  items: Array<AudioResponseInput>;
  question: Scalars['String'];
  timer?: InputMaybe<Scalars['Boolean']>;
  timerDuration?: InputMaybe<Scalars['Int']>;
};

export type AudioResponse = {
  __typename?: 'AudioResponse';
  feedback?: Maybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  media: AudioMedia;
};

export type AudioResponseInput = {
  feedback?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  media: AudioMediaInput;
};

export type CropArea = {
  __typename?: 'CropArea';
  height: Scalars['Int'];
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type CropAreaInput = {
  height: Scalars['Int'];
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type CropPosition = {
  __typename?: 'CropPosition';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type CropPositionInput = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export enum CroppingType {
  Banner = 'BANNER',
  Card = 'CARD',
  Other = 'OTHER',
}

export type Definition = {
  __typename?: 'Definition';
  body: Scalars['String'];
  id: Scalars['String'];
  media?: Maybe<Media>;
  title: Scalars['String'];
};

export type DefinitionIndication = {
  __typename?: 'DefinitionIndication';
  body: Scalars['String'];
  id: Scalars['String'];
  media?: Maybe<Media>;
  title: Scalars['String'];
};

export type DefinitionIndicationInput = {
  body: Scalars['String'];
  id: Scalars['String'];
  media?: InputMaybe<MediaInput>;
  title: Scalars['String'];
};

export type DefinitionInput = {
  body: Scalars['String'];
  id: Scalars['String'];
  media?: InputMaybe<MediaInput>;
  title: Scalars['String'];
};

export enum Disability {
  Colorblind = 'COLORBLIND',
  HardOfHearing = 'HARD_OF_HEARING',
  HardOfHearingVisuallyImpaired = 'HARD_OF_HEARING_VISUALLY_IMPAIRED',
  VisuallyImpaired = 'VISUALLY_IMPAIRED',
}

export type Document = {
  __typename?: 'Document';
  files: Array<Files>;
  text?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalSize: Scalars['Int'];
};

export type DocumentInput = {
  files: Array<FilesInput>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  totalSize: Scalars['Int'];
};

export type Files = {
  __typename?: 'Files';
  a11y?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type FilesInput = {
  a11y?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type General = {
  __typename?: 'General';
  accessibilityText?: Maybe<Scalars['String']>;
  audio?: Maybe<AudioMedia>;
  embededVideo?: Maybe<Scalars['String']>;
  feedback?: Maybe<Scalars['String']>;
  image?: Maybe<GraphicMedia>;
  text: Scalars['String'];
  title: Scalars['String'];
  video?: Maybe<VideoMedia>;
};

export type GeneralInput = {
  accessibilityText?: InputMaybe<Scalars['String']>;
  audio?: InputMaybe<AudioMediaInput>;
  embededVideo?: InputMaybe<Scalars['String']>;
  feedback?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<GraphicMediaInput>;
  text: Scalars['String'];
  title: Scalars['String'];
  video?: InputMaybe<VideoMediaInput>;
};

export type GraphicMedia = {
  __typename?: 'GraphicMedia';
  a11y?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
  cropArea?: Maybe<CropArea>;
  cropPosition?: Maybe<CropPosition>;
  fileSize?: Maybe<Scalars['Int']>;
  fileType: Scalars['String'];
  filename: Scalars['String'];
  resolutionHeight?: Maybe<Scalars['Int']>;
  resolutionWidth?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  zoom?: Maybe<Scalars['Float']>;
};

export type GraphicMediaInput = {
  a11y?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  cropArea?: InputMaybe<CropAreaInput>;
  cropPosition?: InputMaybe<CropPositionInput>;
  fileSize?: InputMaybe<Scalars['Int']>;
  fileType: Scalars['String'];
  filename: Scalars['String'];
  resolutionHeight?: InputMaybe<Scalars['Int']>;
  resolutionWidth?: InputMaybe<Scalars['Int']>;
  src?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  zoom?: InputMaybe<Scalars['Float']>;
};

export type Hotpost = {
  __typename?: 'Hotpost';
  graphic?: Maybe<GraphicMedia>;
  items: Array<HotpostResponse>;
  title: Scalars['String'];
};

export type HotpostInput = {
  graphic?: InputMaybe<GraphicMediaInput>;
  items: Array<HotpostResponseInput>;
  title: Scalars['String'];
};

export type HotpostResponse = {
  __typename?: 'HotpostResponse';
  body: Scalars['String'];
  feedback?: Maybe<Scalars['String']>;
  media?: Maybe<Media>;
  name: Scalars['String'];
  position: Position;
};

export type HotpostResponseInput = {
  body: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<MediaInput>;
  name: Scalars['String'];
  position: PositionInput;
};

export type HotpostResponseQuiz = {
  __typename?: 'HotpostResponseQuiz';
  body: Scalars['String'];
  feedback?: Maybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  media?: Maybe<Media>;
  name: Scalars['String'];
  position: Position;
};

export type HotpostResponseQuizInput = {
  body: Scalars['String'];
  feedback?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  media?: InputMaybe<MediaInput>;
  name: Scalars['String'];
  position: PositionInput;
};

export type Image = {
  __typename?: 'Image';
  a11y?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  resolutionHeight: Scalars['Int'];
  resolutionWidth: Scalars['Int'];
  src?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type ImageInput = {
  a11y?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  cropArea?: InputMaybe<CropAreaInput>;
  cropPosition?: InputMaybe<CropPositionInput>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  resolutionHeight: Scalars['Int'];
  resolutionWidth: Scalars['Int'];
  src?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  zoom?: InputMaybe<Scalars['Float']>;
};

export type Indication = {
  __typename?: 'Indication';
  afterAnswer: Part;
  beforeAnswer: Part;
  media: Media;
  question: Scalars['String'];
  questions: Array<TextQuiz>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type IndicationInput = {
  afterAnswer: PartInput;
  beforeAnswer: PartInput;
  media: MediaInput;
  question: Scalars['String'];
  questions: Array<TextQuizInput>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type InputCroppingInput = {
  height: Scalars['Int'];
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
  zoom: Scalars['Float'];
};

export enum Language {
  English = 'ENGLISH',
  French = 'FRENCH',
}

export type LoadableActivity = {
  computedDuration?: Maybe<Scalars['Int']>;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityAdaptiveCard = LoadableActivity & {
  __typename?: 'LoadableActivityAdaptiveCard';
  computedDuration?: Maybe<Scalars['Int']>;
  content: AdaptiveCards;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityDocument = LoadableActivity & {
  __typename?: 'LoadableActivityDocument';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Document;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityGeneral = LoadableActivity & {
  __typename?: 'LoadableActivityGeneral';
  computedDuration?: Maybe<Scalars['Int']>;
  content: General;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityHotpost = LoadableActivity & {
  __typename?: 'LoadableActivityHotpost';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Hotpost;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityHotpostResponseQuiz = LoadableActivity & {
  __typename?: 'LoadableActivityHotpostResponseQuiz';
  computedDuration?: Maybe<Scalars['Int']>;
  content: HotpostResponseQuiz;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityImage = LoadableActivity & {
  __typename?: 'LoadableActivityImage';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Image;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityIndication = LoadableActivity & {
  __typename?: 'LoadableActivityIndication';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Indication;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityMqcImage = LoadableActivity & {
  __typename?: 'LoadableActivityMQCImage';
  computedDuration?: Maybe<Scalars['Int']>;
  content: PictureQuiz;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityMatching = LoadableActivity & {
  __typename?: 'LoadableActivityMatching';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Matching;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityMcqAudio = LoadableActivity & {
  __typename?: 'LoadableActivityMcqAudio';
  computedDuration?: Maybe<Scalars['Int']>;
  content: AudioQuiz;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityModule = {
  __typename?: 'LoadableActivityModule';
  activeActivities: Scalars['Int'];
  activities: Array<LoadableActivity>;
  author: Scalars['String'];
  conceptActivities: Scalars['Int'];
  id: Scalars['Int'];
  modality: Modality;
  name: Scalars['String'];
  position: Scalars['Int'];
  status: ModuleStatus;
  totalDuration: Scalars['Int'];
  training: Training;
};

export type LoadableActivityMqc = LoadableActivity & {
  __typename?: 'LoadableActivityMqc';
  computedDuration?: Maybe<Scalars['Int']>;
  content: TextQuiz;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivitySorting = LoadableActivity & {
  __typename?: 'LoadableActivitySorting';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Sorting;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityTabs = LoadableActivity & {
  __typename?: 'LoadableActivityTabs';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Tabs;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityText = LoadableActivity & {
  __typename?: 'LoadableActivityText';
  computedDuration?: Maybe<Scalars['Int']>;
  content: Text;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityTextWithImage = LoadableActivity & {
  __typename?: 'LoadableActivityTextWithImage';
  computedDuration?: Maybe<Scalars['Int']>;
  content: TextWithGraphicMedia;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityTitle = LoadableActivity & {
  __typename?: 'LoadableActivityTitle';
  computedDuration?: Maybe<Scalars['Int']>;
  content: TitleRoot;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableActivityVideo = LoadableActivity & {
  __typename?: 'LoadableActivityVideo';
  computedDuration?: Maybe<Scalars['Int']>;
  content: VideoMedia;
  hearingImpaired: Scalars['Boolean'];
  id: Scalars['Int'];
  status: ActivityStatus;
  type: ActivityType;
  userDuration?: Maybe<Scalars['Int']>;
  visionImpaired: Scalars['Boolean'];
};

export type LoadableAndragogueProfile = {
  __typename?: 'LoadableAndragogueProfile';
  id: Scalars['Int'];
  profile: LoadableUserAccount;
};

export type LoadableAsset = {
  __typename?: 'LoadableAsset';
  assetUpload?: Maybe<LoadableAssetUpload>;
  createdAt: Scalars['String'];
  fileName: Scalars['String'];
  id: Scalars['Int'];
  originalName: Scalars['String'];
  training?: Maybe<Training>;
};

export type LoadableAssetUpload = {
  __typename?: 'LoadableAssetUpload';
  bannerCropping?: Maybe<LoadableCropping>;
  downloadUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  mediaType: Scalars['String'];
  otherCropping?: Maybe<LoadableCropping>;
  thumbnailCropping?: Maybe<LoadableCropping>;
  uploadedAt: Scalars['String'];
};

export type LoadableCropping = {
  __typename?: 'LoadableCropping';
  height: Scalars['Int'];
  id: Scalars['Int'];
  width: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
  zoom: Scalars['Float'];
};

export type LoadableInternalProfile = {
  __typename?: 'LoadableInternalProfile';
  id: Scalars['Int'];
  organization: Organization;
  userAccount: LoadableUserAccount;
};

export type LoadableModule = LoadableActivityModule | LoadableSessionModule;

export type LoadableSession = {
  __typename?: 'LoadableSession';
  begin: Scalars['Date'];
  end: Scalars['Date'];
  id: Scalars['Int'];
  maximum: Scalars['Int'];
  minimum: Scalars['Int'];
  slots: Array<LoadableSlot>;
  title: Scalars['String'];
  type: SessionType;
  zoneId: Scalars['String'];
};

export type LoadableSessionModule = {
  __typename?: 'LoadableSessionModule';
  author: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  limitDuration: Scalars['Int'];
  modality: Modality;
  name: Scalars['String'];
  position: Scalars['Int'];
  sessions: Array<LoadableSession>;
  status: ModuleStatus;
  totalDuration: Scalars['Int'];
  training: Training;
};

export type LoadableSlot = {
  __typename?: 'LoadableSlot';
  date: Scalars['Date'];
  description: Scalars['String'];
  finish: Scalars['LocalTime'];
  id: Scalars['Int'];
  info: Scalars['String'];
  invites: Array<LoadableSlotInvite>;
  session: LoadableSession;
  start: Scalars['LocalTime'];
  title: Scalars['String'];
};

export type LoadableSlotInvite = {
  __typename?: 'LoadableSlotInvite';
  coach: LoadableAndragogueProfile;
  id: Scalars['Int'];
  slot: LoadableSlot;
  status: SlotCoachInviteStatus;
  type: SlotCoachType;
};

export type LoadableUserAccount = {
  __typename?: 'LoadableUserAccount';
  andragogueProfile?: Maybe<LoadableAndragogueProfile>;
  email?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  id: Scalars['Int'];
  internalProfile?: Maybe<LoadableInternalProfile>;
  lastname: Scalars['String'];
  recap: Scalars['String'];
};

export type Matching = {
  __typename?: 'Matching';
  items: Array<MatchingResponse>;
  timer: Scalars['Boolean'];
  timerDuration: Scalars['Int'];
};

export type MatchingInput = {
  items: Array<MatchingResponseInput>;
  timer: Scalars['Boolean'];
  timerDuration: Scalars['Int'];
};

export type MatchingResponse = {
  __typename?: 'MatchingResponse';
  audio?: Maybe<AudioMedia>;
  feedback?: Maybe<Scalars['String']>;
  image?: Maybe<GraphicMedia>;
  title: Scalars['String'];
};

export type MatchingResponseInput = {
  audio?: InputMaybe<AudioMediaInput>;
  feedback?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<GraphicMediaInput>;
  title: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  a11y?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

export type MediaInput = {
  a11y?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export enum Modality {
  ELearning = 'E_LEARNING',
  MicroLearning = 'MICRO_LEARNING',
  Presential = 'PRESENTIAL',
  VirtualClassroom = 'VIRTUAL_CLASSROOM',
}

export enum ModuleStatus {
  Active = 'ACTIVE',
  Concept = 'CONCEPT',
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptInvite: LoadableSlotInvite;
  addColumn: Scalars['Boolean'];
  archiveTraining: Training;
  closeSession: LoadableSession;
  createActivity: LoadableActivity;
  createModule: LoadableModule;
  createSession: LoadableSession;
  createSlot: LoadableSlot;
  createTraining: Training;
  deleteColumn: Scalars['Boolean'];
  deleteInvite: Scalars['Boolean'];
  deleteModule: Scalars['Boolean'];
  deleteSession: Scalars['Boolean'];
  deleteSlot: Scalars['Boolean'];
  deleteTraining: Scalars['Boolean'];
  disableModule?: Maybe<LoadableModule>;
  duplicateSession: LoadableSession;
  enableModule?: Maybe<LoadableModule>;
  inviteCoach: LoadableSlotInvite;
  prepareAsset: Scalars['Boolean'];
  publishSession: LoadableSession;
  publishTraining: Training;
  refuseInvite: LoadableSlotInvite;
  removeActivity: Scalars['Boolean'];
  reorderActivityAfter: Scalars['Boolean'];
  reorderActivityBefore: Scalars['Boolean'];
  setActivityAssetCropping: Scalars['Boolean'];
  setModulePosition: LoadableModule;
  setTrainingAssetBannerCropping: Scalars['Boolean'];
  setTrainingAssetCardCropping: Scalars['Boolean'];
  updateActivity: LoadableActivity;
  updateModuleFields: LoadableModule;
  updateSession: LoadableSession;
  updateSlot: LoadableSlot;
  updateTraining: Training;
  uploadAsset?: Maybe<AssetOutput>;
};

export type MutationAcceptInviteArgs = {
  inviteId: Scalars['Int'];
};

export type MutationAddColumnArgs = {
  position: Scalars['Int'];
  trainingId: Scalars['Int'];
};

export type MutationArchiveTrainingArgs = {
  trainingId: Scalars['Int'];
};

export type MutationCloseSessionArgs = {
  sessionId: Scalars['Int'];
};

export type MutationCreateActivityArgs = {
  activityInput: ActivityInput;
  moduleId: Scalars['Int'];
};

export type MutationCreateModuleArgs = {
  modality: Modality;
  position: Scalars['Int'];
  trainingId: Scalars['Int'];
};

export type MutationCreateSessionArgs = {
  begin: Scalars['Date'];
  end: Scalars['Date'];
  maximum: Scalars['Int'];
  minimum: Scalars['Int'];
  moduleId: Scalars['Int'];
  title: Scalars['String'];
  zoneId: Scalars['String'];
};

export type MutationCreateSlotArgs = {
  date: Scalars['Date'];
  description: Scalars['String'];
  finish: Scalars['LocalTime'];
  info: Scalars['String'];
  sessionId: Scalars['Int'];
  start: Scalars['LocalTime'];
  title: Scalars['String'];
};

export type MutationCreateTrainingArgs = {
  title: Scalars['String'];
};

export type MutationDeleteColumnArgs = {
  position: Scalars['Int'];
  trainingId: Scalars['Int'];
};

export type MutationDeleteInviteArgs = {
  inviteId: Scalars['Int'];
};

export type MutationDeleteModuleArgs = {
  moduleId: Scalars['Int'];
};

export type MutationDeleteSessionArgs = {
  sessionId: Scalars['Int'];
};

export type MutationDeleteSlotArgs = {
  slotId: Scalars['Int'];
};

export type MutationDeleteTrainingArgs = {
  trainingId: Scalars['Int'];
};

export type MutationDisableModuleArgs = {
  moduleId: Scalars['Int'];
};

export type MutationDuplicateSessionArgs = {
  sessionId: Scalars['Int'];
};

export type MutationEnableModuleArgs = {
  moduleId: Scalars['Int'];
};

export type MutationInviteCoachArgs = {
  andragogueId: Scalars['Int'];
  slotId: Scalars['Int'];
};

export type MutationPrepareAssetArgs = {
  idTraining: Scalars['Int'];
};

export type MutationPublishSessionArgs = {
  sessionId: Scalars['Int'];
};

export type MutationPublishTrainingArgs = {
  trainingId: Scalars['Int'];
};

export type MutationRefuseInviteArgs = {
  inviteId: Scalars['Int'];
};

export type MutationRemoveActivityArgs = {
  activityId: Scalars['Int'];
};

export type MutationReorderActivityAfterArgs = {
  refId: Scalars['Int'];
  toMoveId: Scalars['Int'];
};

export type MutationReorderActivityBeforeArgs = {
  refId: Scalars['Int'];
  toMoveId: Scalars['Int'];
};

export type MutationSetActivityAssetCroppingArgs = {
  filename: Scalars['String'];
  input: InputCroppingInput;
};

export type MutationSetModulePositionArgs = {
  moduleId: Scalars['Int'];
  toPosition: Scalars['Int'];
};

export type MutationSetTrainingAssetBannerCroppingArgs = {
  filename: Scalars['String'];
  input: InputCroppingInput;
};

export type MutationSetTrainingAssetCardCroppingArgs = {
  filename: Scalars['String'];
  input: InputCroppingInput;
};

export type MutationUpdateActivityArgs = {
  activityId: Scalars['Int'];
  activityInput: ActivityInput;
};

export type MutationUpdateModuleFieldsArgs = {
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  limitDuration?: InputMaybe<Scalars['Int']>;
  moduleId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateSessionArgs = {
  begin?: InputMaybe<Scalars['Date']>;
  end?: InputMaybe<Scalars['Date']>;
  maximum?: InputMaybe<Scalars['Int']>;
  minimum?: InputMaybe<Scalars['Int']>;
  sessionId: Scalars['Int'];
  title?: InputMaybe<Scalars['String']>;
  zoneId?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateSlotArgs = {
  date?: InputMaybe<Scalars['Date']>;
  description?: InputMaybe<Scalars['String']>;
  finish?: InputMaybe<Scalars['LocalTime']>;
  info?: InputMaybe<Scalars['String']>;
  slotId: Scalars['Int'];
  start?: InputMaybe<Scalars['LocalTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateTrainingArgs = {
  adaptiveLearning?: InputMaybe<Scalars['Boolean']>;
  colorScheme?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  disabilities?: InputMaybe<Array<Disability>>;
  language?: InputMaybe<Language>;
  modalities?: InputMaybe<Array<Modality>>;
  objectives?: InputMaybe<Array<Scalars['String']>>;
  prerequisite?: InputMaybe<Array<Scalars['String']>>;
  qualifications?: InputMaybe<Array<Scalars['String']>>;
  screenSizes?: InputMaybe<Array<ScreenSize>>;
  skills?: InputMaybe<Array<Scalars['String']>>;
  targets?: InputMaybe<Array<Scalars['String']>>;
  themeId?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  trainingId: Scalars['Int'];
};

export type MutationUploadAssetArgs = {
  input: AssetInput;
};

export type Objective = {
  __typename?: 'Objective';
  order: Scalars['Int'];
  training: Training;
  value: Scalars['String'];
};

export type Organization = {
  __typename?: 'Organization';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Part = {
  __typename?: 'Part';
  definitions: Array<DefinitionIndication>;
  itemType: Scalars['String'];
  media?: Maybe<Media>;
  text: Scalars['String'];
};

export type PartInput = {
  definitions: Array<DefinitionIndicationInput>;
  itemType: Scalars['String'];
  media?: InputMaybe<MediaInput>;
  text: Scalars['String'];
};

export type PictureQuiz = {
  __typename?: 'PictureQuiz';
  display?: Maybe<Scalars['String']>;
  items: Array<PictureResponse>;
  question: Scalars['String'];
  timer?: Maybe<Scalars['Boolean']>;
  timerDuration?: Maybe<Scalars['Int']>;
};

export type PictureQuizInput = {
  display?: InputMaybe<Scalars['String']>;
  items: Array<PictureResponseInput>;
  question: Scalars['String'];
  timer?: InputMaybe<Scalars['Boolean']>;
  timerDuration?: InputMaybe<Scalars['Int']>;
};

export type PictureResponse = {
  __typename?: 'PictureResponse';
  feedback?: Maybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  media: GraphicMedia;
};

export type PictureResponseInput = {
  feedback?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  media: GraphicMediaInput;
};

export type Position = {
  __typename?: 'Position';
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type PositionInput = {
  x: Scalars['Int'];
  y: Scalars['Int'];
};

export type Prerequisite = {
  __typename?: 'Prerequisite';
  order: Scalars['Int'];
  trainings: Training;
  value: Scalars['String'];
};

export type Qualification = {
  __typename?: 'Qualification';
  organization?: Maybe<Organization>;
  title: Scalars['String'];
  trainings: Array<Training>;
};

export type Query = {
  __typename?: 'Query';
  allTrainings: Array<Training>;
  availableCoaches: Array<LoadableAndragogueProfile>;
  availableLists: UserAvailableList;
  getActivity: LoadableActivity;
  getAsset: LoadableAsset;
  getAssetForTraining: LoadableAsset;
  getModule?: Maybe<LoadableModule>;
  getSession: LoadableSession;
  getSlot: LoadableSlot;
  getTraining?: Maybe<Training>;
  getUserAccount?: Maybe<LoadableUserAccount>;
  getUserAccountByEmail?: Maybe<LoadableUserAccount>;
  isCoachAvailable: Scalars['Boolean'];
  myTrainings: Array<Training>;
};

export type QueryAvailableCoachesArgs = {
  slotId: Scalars['Int'];
};

export type QueryGetActivityArgs = {
  activityId: Scalars['Int'];
};

export type QueryGetAssetArgs = {
  filename: Scalars['String'];
};

export type QueryGetAssetForTrainingArgs = {
  idTraining: Scalars['Int'];
  type: CroppingType;
};

export type QueryGetModuleArgs = {
  moduleId: Scalars['Int'];
};

export type QueryGetSessionArgs = {
  id: Scalars['Int'];
};

export type QueryGetSlotArgs = {
  id: Scalars['Int'];
};

export type QueryGetTrainingArgs = {
  id: Scalars['Int'];
};

export type QueryGetUserAccountArgs = {
  id: Scalars['Int'];
};

export type QueryGetUserAccountByEmailArgs = {
  email: Scalars['String'];
};

export type QueryIsCoachAvailableArgs = {
  andragogueProfileId: Scalars['Int'];
  slotId: Scalars['Int'];
};

export type ResponseSorting = {
  __typename?: 'ResponseSorting';
  audio?: Maybe<AudioMedia>;
  graphic?: Maybe<GraphicMedia>;
  index: Scalars['Int'];
  itemType: Scalars['String'];
  text: Scalars['String'];
};

export type ResponseSortingInput = {
  audio?: InputMaybe<AudioMediaInput>;
  graphic?: InputMaybe<GraphicMediaInput>;
  index: Scalars['Int'];
  itemType: Scalars['String'];
  text: Scalars['String'];
};

export enum ScreenSize {
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE',
  Tablet = 'TABLET',
}

export enum SessionType {
  Canceled = 'CANCELED',
  Closed = 'CLOSED',
  Confirmed = 'CONFIRMED',
  Done = 'DONE',
  Pending = 'PENDING',
  Scheduled = 'SCHEDULED',
  Unpublished = 'UNPUBLISHED',
}

export type Skill = {
  __typename?: 'Skill';
  name: Scalars['String'];
  organization?: Maybe<Organization>;
  trainings: Array<Training>;
};

export enum SlotCoachInviteStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Refused = 'REFUSED',
  Saved = 'SAVED',
}

export enum SlotCoachType {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
}

export type Sorting = {
  __typename?: 'Sorting';
  items: Array<ResponseSorting>;
};

export type SortingInput = {
  items: Array<ResponseSortingInput>;
};

export type Subscription = {
  __typename?: 'Subscription';
  flow: Scalars['String'];
};

export type TabSection = {
  __typename?: 'TabSection';
  description: Scalars['String'];
  media?: Maybe<GraphicMedia>;
  title: Scalars['String'];
};

export type TabSectionInput = {
  description: Scalars['String'];
  media?: InputMaybe<GraphicMediaInput>;
  title: Scalars['String'];
};

export type Tabs = {
  __typename?: 'Tabs';
  description?: Maybe<Scalars['String']>;
  tabs: Array<TabSection>;
  title: Scalars['String'];
};

export type TabsInput = {
  description?: InputMaybe<Scalars['String']>;
  tabs: Array<TabSectionInput>;
  title: Scalars['String'];
};

export type Target = {
  __typename?: 'Target';
  organization?: Maybe<Organization>;
  title: Scalars['String'];
  trainings: Array<Training>;
};

export type Text = {
  __typename?: 'Text';
  body: Scalars['String'];
  definitions: Array<Definition>;
  title: Scalars['String'];
};

export type TextInput = {
  body: Scalars['String'];
  definitions: Array<DefinitionInput>;
  title: Scalars['String'];
};

export type TextQuiz = {
  __typename?: 'TextQuiz';
  feedback?: Maybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  items: Array<TextResponse>;
  question: Scalars['String'];
  timer?: Maybe<Scalars['Boolean']>;
  timerDuration?: Maybe<Scalars['Int']>;
};

export type TextQuizInput = {
  feedback?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  items: Array<TextResponseInput>;
  question: Scalars['String'];
  timer?: InputMaybe<Scalars['Boolean']>;
  timerDuration?: InputMaybe<Scalars['Int']>;
};

export type TextResponse = {
  __typename?: 'TextResponse';
  feedback?: Maybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  response: Scalars['String'];
};

export type TextResponseInput = {
  feedback?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  response: Scalars['String'];
};

export type TextWithGraphicMedia = {
  __typename?: 'TextWithGraphicMedia';
  body: Scalars['String'];
  definitions: Array<Definition>;
  display: Scalars['String'];
  textPosition: Scalars['String'];
  title: Scalars['String'];
};

export type TextWithGraphicMediaInput = {
  body: Scalars['String'];
  definitions: Array<DefinitionInput>;
  display: Scalars['String'];
  textPosition: Scalars['String'];
  title: Scalars['String'];
};

export type Theme = {
  __typename?: 'Theme';
  activityTypes: Array<ActivityType>;
  author: Scalars['String'];
  bundle: Scalars['String'];
  colorSchemes: Scalars['String'];
  dateOfCreation: Scalars['String'];
  devices: Array<ScreenSize>;
  disabilities: Array<Disability>;
  fonts: Array<Scalars['String']>;
  id: Scalars['String'];
  is3d: Scalars['Boolean'];
  isAdaptiveLearning: Scalars['Boolean'];
  name: Scalars['String'];
  previewImage: Scalars['String'];
  version: Scalars['String'];
  viewMode: Scalars['String'];
};

export type Thumbnail = {
  __typename?: 'Thumbnail';
  miniatureXPosition?: Maybe<Scalars['Float']>;
  miniatureYPosition?: Maybe<Scalars['Float']>;
  miniatureZoom?: Maybe<Scalars['Float']>;
  path: Scalars['String'];
  training: Training;
  xPosition?: Maybe<Scalars['Float']>;
  yPosition?: Maybe<Scalars['Float']>;
  zoom?: Maybe<Scalars['Float']>;
};

export type TitleRoot = {
  __typename?: 'TitleRoot';
  title: Scalars['String'];
};

export type TitleRootInput = {
  title: Scalars['String'];
};

export type Training = {
  __typename?: 'Training';
  activityModules: Array<LoadableModule>;
  adaptiveLearning: Scalars['Boolean'];
  author: LoadableAndragogueProfile;
  colorScheme?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
  description: Scalars['String'];
  disabilities: Array<Disability>;
  id: Scalars['Int'];
  isValid: Scalars['Boolean'];
  language: Language;
  modalities: Array<Modality>;
  modules: Array<LoadableModule>;
  objectives: Array<Objective>;
  prerequisites: Array<Prerequisite>;
  qualifications: Array<Qualification>;
  screenSizes: Array<ScreenSize>;
  sessionModules: Array<LoadableModule>;
  skills: Array<Skill>;
  state: TrainingState;
  targets: Array<Target>;
  theme?: Maybe<Theme>;
  thumbnail?: Maybe<Thumbnail>;
  title: Scalars['String'];
};

export type TrainingActivityModulesArgs = {
  modalities?: InputMaybe<Array<Modality>>;
};

export type TrainingModulesArgs = {
  modalities?: InputMaybe<Array<Modality>>;
};

export type TrainingSessionModulesArgs = {
  modalities?: InputMaybe<Array<Modality>>;
};

export enum TrainingState {
  Archived = 'ARCHIVED',
  Concept = 'CONCEPT',
  Published = 'PUBLISHED',
}

export type UserAvailableList = {
  __typename?: 'UserAvailableList';
  disabilities: Array<Scalars['String']>;
  qualifications: Array<Qualification>;
  skills: Array<Skill>;
  targets: Array<Target>;
};

export type VideoMedia = {
  __typename?: 'VideoMedia';
  a11y?: Maybe<Scalars['String']>;
  config?: Maybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  videoDuration?: Maybe<Scalars['Int']>;
};

export type VideoMediaInput = {
  a11y?: InputMaybe<Scalars['String']>;
  config?: InputMaybe<Scalars['String']>;
  fileSize: Scalars['Int'];
  fileType: Scalars['String'];
  filename: Scalars['String'];
  src?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  videoDuration?: InputMaybe<Scalars['Int']>;
};

export type PublishTrainingMutationVariables = Types.Exact<{
  trainingId: Types.Scalars['Int'];
}>;

export type PublishTrainingMutation = {
  __typename?: 'Mutation';
  publishTraining: { __typename?: 'Training'; id: number; title: string };
};

export const PublishTrainingDocument = `
    mutation publishTraining($trainingId: Int!) {
  publishTraining(trainingId: $trainingId) {
    id
    title
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: build => ({
    publishTraining: build.mutation<
      PublishTrainingMutation,
      PublishTrainingMutationVariables
    >({
      query: variables => ({ document: PublishTrainingDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const { usePublishTrainingMutation } = injectedRtkApi;
