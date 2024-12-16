import { useQuery } from "@tanstack/react-query"
import { episodes } from "../api/api"

export const useAllEpisodes = () => {
    const response = useQuery({
        queryKey: ["episodes"],
        queryFn: () => episodes.getAllEpisodes(),
        select: (data) => data.data,
    })

    return { info: response.data?.info, results: response.data?.results, ...response };
}