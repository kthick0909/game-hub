import { Box, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <Box display="flex" flex="1" flexDirection="row">
      <SkeletonCircle />
      <Box>
        <Skeleton height={3} width={100} marginY={3} marginX={2} />
      </Box>
    </Box>
  );
};

export default GenreListSkeleton;
