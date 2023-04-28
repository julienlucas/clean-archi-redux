/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useLayoutEffect, useState } from 'react';

import { Training } from '@andragog/domain/entities/trainings-types';
import { usePrefixedTranslation } from '@andragog/services/ui-hooks';
import {
  convertSecondsToHoursMinutes,
  getTotalTime,
} from '@andragog/services/ui-utility';
import { HStack, Text, VStack } from '@chakra-ui/react';
import { HiOutlineClock, HiOutlineUsers } from 'react-icons/hi';

interface TrainingCardOverlayContent {
  training: Training;
  hasMenu?: boolean;
}
export const TrainingCardOverlayContent = ({
  hasMenu,
  training,
}: TrainingCardOverlayContent) => {
  const [totalModulesDuration, setTotalModulesDuration] = useState();
  const { t } = usePrefixedTranslation(
    'production:training.edit.configuration'
  );

  useLayoutEffect(() => {
    if (
      training &&
      training?.modalities.length !== 0 &&
      training?.modules.length !== 0
    ) {
      const totalDuration = convertSecondsToHoursMinutes(
        getTotalTime(training?.modules)
      );
      setTotalModulesDuration(totalDuration);
    }
  }, [training.id]);

  return (
    <VStack
      padding="1.6rem"
      spacing="1.6rem"
      alignItems="flex-start"
      marginLeft="0.6rem"
    >
      <HStack spacing="1.6rem" paddingTop={!hasMenu ? '4.5rem' : ''}>
        <HiOutlineClock />
        <Text fontSize="1.2rem" color="primary.0">
          {totalModulesDuration}
        </Text>
      </HStack>
      <HStack spacing="1.6rem">
        <HiOutlineUsers />
        <Text fontSize="1.2rem" color="primary.0">
          {t('learner', { count: 230 })}
        </Text>
      </HStack>
    </VStack>
  );
};
