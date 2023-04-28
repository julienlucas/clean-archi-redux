/* eslint-disable @nrwl/nx/enforce-module-boundaries */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLayoutEffect, useState } from 'react';

import { Training } from '@andragog/domain/entities/trainings-types';
import { getTrainingUrlAndFileFromStoragePath } from '@andragog/infrastructure/TrainingsGateway';
import { usePrefixedTranslation } from '@andragog/services/ui-hooks';
import {
  AgActionModal,
  AgButton,
  AgGridCard,
} from '@andragog/services/ui-library';
import { Box, BoxProps, Flex } from '@chakra-ui/react';

import { TrainingCardBottomContent } from './training-card-bottom-content';
import { TrainingCardOverlayContent } from './training-card-overlay-content';
import { TrainingCardTopContent } from './training-card-top-content';

interface TrainingCardProps extends BoxProps {
  training: Training;
  index: number;
  theme?: 'light' | 'dark';
  hasMenu?: boolean;
  isSliderCard?: boolean;
  isEmpty?: boolean;
  onEditLink?: string;
  onDuplicate?: () => void;
  onArchive?: () => void;
  onDelete?: () => void;
}

export const TrainingCard = ({
  training,
  index,
  theme = 'dark',
  // isSliderCard = false,
  hasMenu = true,
  isEmpty = false,
  onEditLink,
  onArchive,
  onDelete,
  onDuplicate,
}: TrainingCardProps) => {
  const { t: tg, i18n } = usePrefixedTranslation('production:general');
  const [openedModal, setOpenedModal] = useState<string>('');

  const [thumbnail, setThumbnail] = useState<
    { url?: string; data?: any } | undefined
  >(undefined);

  useLayoutEffect(() => {
    if (training.id) {
      getTrainingUrlAndFileFromStoragePath(training.id).then(response =>
        setThumbnail(response)
      );
    }
  }, [training.id]);

  const handleAction = () => {
    if (openedModal === 'archive') {
      onArchive();
      setOpenedModal('');
    }
    if (openedModal === 'delete') {
      onDelete();
      setOpenedModal('');
    }
    if (openedModal === 'duplicate') {
      onDuplicate();
      setOpenedModal('');
    }
  };

  return training?.id ? (
    <>
      <AgGridCard
        index={index}
        training={training}
        bottomCardContent={
          <TrainingCardBottomContent training={training} theme={theme} />
        }
        topCardContent={
          <TrainingCardTopContent hasMenu={hasMenu} training={training} />
        }
        overlayContent={
          <TrainingCardOverlayContent hasMenu={hasMenu} training={training} />
        }
        thumbnail={thumbnail}
        isEmpty={isEmpty}
        theme={theme}
        onEditLink={onEditLink}
        onArchive={() => setOpenedModal('archive')}
        onDelete={() => setOpenedModal('delete')}
        //TODO: integrate the usecase duplicateTraining
        // onDuplicate={null}
        hasMenu={hasMenu}
        link={`/${i18n.resolvedLanguage}/presentation/${training.id}/${training.title}`}
      />

      {openedModal !== '' && (
        <Box position="absolute">
          <AgActionModal
            hasOverlay
            isTopFixed
            hideCross
            icon={{
              type:
                openedModal === 'delete'
                  ? 'trash'
                  : openedModal === 'archive'
                  ? 'cube'
                  : '',
            }}
            position="fixed"
            left="50%"
            width="max-content"
            transform="translateX(-50%)"
            label={tg(`modal.${openedModal}.title`)}
            subLabel={tg(`modal.${openedModal}.subTitle`)}
          >
            <Flex gap="1.6rem">
              <AgButton
                variant="textButtonLight"
                size="sm"
                onClick={() => setOpenedModal('')}
              >
                {tg(`modal.${openedModal}.cancel`)}
              </AgButton>
              <AgButton
                background={openedModal === 'delete' ? 'error.300' : 'white'}
                color={openedModal === 'delete' ? 'white' : 'gray.800'}
                iconLeft={
                  openedModal === 'delete' ? 'HiOutlineTrash' : 'HiCheck'
                }
                size="sm"
                onClick={handleAction}
                variant={openedModal === 'delete' && 'danger'}
              >
                {tg(`modal.${openedModal}.confirm`)}
              </AgButton>
            </Flex>
          </AgActionModal>
        </Box>
      )}
    </>
  ) : (
    <AgGridCard
      index={index}
      training={training}
      bottomCardContent={<></>}
      topCardContent={<Box bg="gray.700" height="100%" />}
      overlayContent={<></>}
      isEmpty={isEmpty}
      theme={theme}
    />
  );
};
