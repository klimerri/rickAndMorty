import { useQuery } from "@tanstack/react-query"
import { characters } from "../api/api"

export const useCharacter = (id) => {
    const response = useQuery({
        queryKey: ["character", id],
        queryFn: () => characters.getCharacterById(id),
        select: (data) => data.data,
    })

    return { info: response.data?.info, results: response.data?.results, ...response };
}