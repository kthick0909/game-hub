import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { ScreenShot } from "../entities/ScreenShot";

const useScreenShot = (gameId: string | number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenShot;
