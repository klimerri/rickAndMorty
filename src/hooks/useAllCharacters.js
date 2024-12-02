import { useQuery } from "@tanstack/react-query"
import { characters } from "../api/api"

export const useAllCharacters = (page) => {
    const response = useQuery({
        queryKey: ["characters", page],
        queryFn: () => characters.getCharactersByPage(page),
        select: (data) => data.data,
    })

    return { info: response.data?.info, results: response.data?.results, ...response };
}