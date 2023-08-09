import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
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
                  boxSize={"32px"}
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImageUrl(genre.image_background, 600, 400)}
                />
                <Button
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => onSelectGenre(genre)}
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
