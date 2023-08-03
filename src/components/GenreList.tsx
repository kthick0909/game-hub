import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return null;

  return (
    <List padding={3}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingY={"5px"}>
            <GenreListSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
              />
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
