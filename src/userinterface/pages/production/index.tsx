import { useEffect } from 'react';

import {
  addTraining,
  archiveTraining,
  deleteTraining,
  isValidTraining,
} from '@andragog/domain/usecases/training-slice';
import { useMyTrainingsQuery } from '@andragog/infrastructure/api/queries/MyTrainings.generated';
import { useDispatch } from '@andragog/store';
import { TrainingCard } from '@andragog/userinterface/components/trainings/feature';
import { Container, Flex, Grid } from '@chakra-ui/react';
import { AgAddCard } from '@ui-lib/components';
import { useNavigate } from 'react-router-dom';

export const ProductionPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, refetch, isFetching, isLoading } = useMyTrainingsQuery();

  useEffect(() => {
    refetch();
  }, []);

  const handleAddTraining = async () => {
    dispatch(
      addTraining(trainingId =>
        navigate(`/production/${trainingId}/edit/configuration`)
      )
    );
  };

  const handleDeleteTraining = async (trainingId: number) => {
    //TODO: ajouter le delete thumbnail quand endpoint api prêt
    // await deleteTrainingThumbnail(trainingId.toString());
    await dispatch(deleteTraining(Number(trainingId)));
  };

  const handleArchiveTraining = async (trainingId: number) => {
    await dispatch(archiveTraining(Number(trainingId)));
  };

  if (isLoading || isFetching)
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      Loading
    </Flex>;

  return (
    <ProtectedRoute>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <Container variant="sectionDark" paddingTop="6.4rem">
        <Grid
          templateColumns="repeat(auto-fill, 28.1rem)"
          gap="2rem"
          justifyContent="center"
          maxWidth="175rem"
          paddingTop="3.2rem"
          paddingBottom="2.2rem"
          paddingX="4.2rem"
          margin="auto"
        >
          <AgAddCard
            transition="background 0.5s linear, outline-color 0.5s linear, transform 0.6s 0.6s, opacity 0.6s 0.6s"
            outline="2px solid"
            outlineColor="transparent"
            outlineOffset="2px"
            minHeight="35rem"
            onClick={handleAddTraining}
            _hover={{
              outlineColor: 'primary.0',
            }}
            dark
          />
          {data?.myTrainings?.map((training, index) => {
            const onEditLink = isValidTraining(training)
              ? `/production/${training.id}/edit/timeline`
              : `/production/${training.id}/edit/configuration`;

            return (
              <TrainingCard
                key={training.id}
                training={training}
                index={index + 1}
                onEditLink={onEditLink}
                onArchive={() => handleArchiveTraining(training.id)}
                onDelete={() => handleDeleteTraining(training.id)}
                //TODO: add duplicateTraining
                // onDuplicate={null}
              />
            );
          })}
        </Grid>
      </Container>
    </ProtectedRoute>
  );
};

export default ProductionPage;
