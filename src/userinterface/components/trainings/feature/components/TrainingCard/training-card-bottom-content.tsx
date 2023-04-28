import { Training } from '@andragog/domain/entities/trainings-types';
import { usePrefixedTranslation } from '@andragog/services/ui-hooks';
import { Text } from '@chakra-ui/react';

interface TrainingCardBottomContentProps {
  training: Training;
  theme: 'light' | 'dark';
}

export const TrainingCardBottomContent = ({
  training,
  theme,
}: TrainingCardBottomContentProps) => {
  const { t } = usePrefixedTranslation('production:general');

  return (
    <>
      {training.title && (
        <Text
          color={theme === 'dark' ? 'primary.0' : 'gray.900'}
          fontSize="1.6rem"
          fontWeight="700"
        >
          {training.title}
        </Text>
      )}
      {!training.title && (
        <Text
          color={theme === 'dark' ? 'primary.0' : 'gray.900'}
          as="i"
          fontSize="1.6rem"
          fontWeight="700"
        >
          {t('noTitle')}
        </Text>
      )}
      <Text
        fontSize="1.2rem"
        color={theme === 'dark' ? 'primary.0' : 'gray.900'}
        alignSelf="flex-end"
      >
        {/* TODO: ajouter le tarif quand endpoint prêt */}
        {/* <b>3999K</b>€HT */}
      </Text>
    </>
  );
};
