import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" padding={3}>
        Genre
      </Heading>
      <List padding={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <ListItem key={skeleton} paddingY={"5px"}>
              <GenreListSkeleton />
            </ListItem>
          ))}
        {data?.results.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack>
                <Image
                  loading="lazy"
                  boxSize={"32px"}
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background, 600, 400)}
                />
                <Button
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize={"lg"}
                  variant="link"
                  whiteSpace="break-spaces"
                  textAlign="left"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
