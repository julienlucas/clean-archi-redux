/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { Training } from '@andragog/domain/entities/trainings-types';
import { usePrefixedTranslation } from '@andragog/services/ui-hooks';
import { colors } from '@andragog/services/ui-theme/foundations/colors';
import {
  GroupConnectedIcon,
  RibbonIcon,
  VideoCallIcon,
  FavoriteIcon,
} from '@ui-lib/icons';
import { HiOutlinePuzzle } from 'react-icons/hi';

interface TrainingCardTopContentProps {
  training: Training;
  hasMenu?: boolean;
}

const modalityIcons = [
  {
    type: 'E_LEARNING',
    icon: <RibbonIcon size="1.6rem" />,
  },
  {
    type: 'PRESENTIAL',
    icon: <GroupConnectedIcon />,
  },
  {
    type: 'VIRTUAL_CLASSROOM',
    icon: <VideoCallIcon size="1.6rem" />,
  },
  {
    type: 'MICRO_LEARNING',
    icon: <HiOutlinePuzzle size="1.6rem" />,
  },
];

export const TrainingCardTopContent = ({
  hasMenu,
  training,
}: TrainingCardTopContentProps) => {
  const { t } = usePrefixedTranslation(
    'production:training.edit.configuration'
  );
  return (
    <>
      {hasMenu === false && (
        <>
          <Flex
            width="100%"
            height="2.4rem"
            position="absolute"
            top="1rem"
            justifyContent="space-between"
            alignItems="center"
            pointerEvents="none"
          >
            <Flex
              alignItems="center"
              height="3.2rem"
              bg={'notification.400'}
              px="0"
              ml="2rem"
              mt="2rem"
              borderRadius="2rem"
              paddingX="1.2rem"
            >
              <Text color="primary.0" fontSize="1.4rem">
                {t('newTrainingLabel')}
              </Text>
            </Flex>
          </Flex>
          <Flex
            width="100%"
            height="2.4rem"
            position="absolute"
            top="1.5rem"
            right="0"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Flex
              position="relative"
              alignItems="center"
              height="100%"
              px="0"
              paddingX="1.5rem"
              //TODO: create POST favorite true|false
              onClick={() =>
                console.log('TODO: create POST favorite true|false')
              }
            >
              <FavoriteIcon
                height="24px"
                width="24px"
                favorite={training?.favorite}
                fill={training?.favorite ? 'white' : colors.warning['300']}
              />
            </Flex>
          </Flex>
        </>
      )}

      <Flex
        width="100%"
        height="2.4rem"
        position="absolute"
        bottom="1rem"
        paddingLeft="1.6rem"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack height="100%" spacing="0.4rem">
          {modalityIcons?.map((element, index) => {
            return training?.modalities?.map(
              item =>
                item === element.type && (
                  <VStack
                    key={index}
                    width="2.4rem"
                    height="100%"
                    borderRadius="0.4rem"
                    bg={`module.${element.type}.basic`}
                    color="primary.0"
                    justifyContent="center"
                  >
                    {element.icon}
                  </VStack>
                )
            );
          })}
        </HStack>

        {training?.adaptiveLearning && (
          <Flex
            alignItems="center"
            height="100%"
            bg="primary.0"
            px="1.6rem"
            borderLeftRadius="3rem"
          >
            <Text color="primary.900" fontSize="1.2rem" fontWeight="700">
              {t('adaptiveLearningLabel')}
            </Text>
          </Flex>
        )}
      </Flex>
    </>
  );
};
