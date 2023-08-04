import { GameQuery } from "../App";

import { Platform } from "./usePlatforms";
import useData from "./useData";
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

// const useGames = () => {
//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setIsLoading(true);
//     apiClient
//       .get<FetchGamesResponse>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;

//         setError(err.message);
//         setIsLoading(false);
//       });

//     return () => controller.abort();
//   }, []);
//   return { games, error, isLoading };
// };

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: { genre: gameQuery.genre?.id, platforms: gameQuery.platform?.id },
    },
    [gameQuery]
  );

export default useGames;
