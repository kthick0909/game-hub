import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5} margin={5}>
        <Heading>Something went wrong!!!</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? `The page you’re looking for doesn't exist.`
            : `Error occurred.`}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
