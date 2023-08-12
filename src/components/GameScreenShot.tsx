import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useScreenShot from "../hooks/useScreenShot";

interface Props {
  gameId: number | string;
}

const GameScreenShot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenShot(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((file) => (
        <Image loading="lazy" src={file.image} key={file.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenShot;
