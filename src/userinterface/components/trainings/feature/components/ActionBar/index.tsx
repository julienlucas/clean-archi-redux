import React from 'react';

import { Training } from '@andragog/domain/entities/trainings-types';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import {
  HiOutlineArchive,
  HiOutlineDuplicate,
  HiOutlinePencilAlt,
  HiOutlineTrash,
} from 'react-icons/hi';

import { ActionButton } from '../ActionButton';

export interface ActionBarProps extends BoxProps {
  onArchive: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onEditLink: string;
  hideMenu: () => void;
  training: Training;
}

export const ActionBar = ({
  onArchive,
  onDelete,
  onDuplicate,
  onEditLink,
  hideMenu,
  training,
  ...rest
}: ActionBarProps) => {
  const handleDuplicateTraining = () => {
    onDuplicate();
    hideMenu();
  };

  const handleArchiveTraining = () => {
    onArchive();
    hideMenu();
  };

  const handleDeleteTraining = () => {
    onDelete();
    hideMenu();
  };

  return (
    <Box {...rest}>
      <Flex
        position="relative"
        zIndex="5"
        bg="primary.900"
        borderRadius="0.8rem"
        flexDirection="column"
        marginLeft="5.8rem"
        padding="0.4rem"
        color="primary.0"
        border="0.5px solid"
        borderColor="gray.700"
      >
        <ActionButton href={onEditLink} onClick={hideMenu}>
          <HiOutlinePencilAlt size="2.4rem" />
        </ActionButton>
        <ActionButton onClick={handleDuplicateTraining}>
          <HiOutlineDuplicate size="2.4rem" />
        </ActionButton>
        <ActionButton onClick={handleArchiveTraining}>
          <HiOutlineArchive size="2.4rem" />
        </ActionButton>
        <ActionButton onClick={handleDeleteTraining}>
          <HiOutlineTrash size="2.4rem" />
        </ActionButton>
      </Flex>
    </Box>
  );
};
