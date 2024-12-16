import { useQuery } from "@tanstack/react-query"
import { locations } from "../api/api"

export const useAllLocations = () => {
    const response = useQuery({
        queryKey: ["locations"],
        queryFn: () => locations.getAllLocations(),
        select: (data) => data.data,
    })

    return { info: response.data?.info, results: response.data?.results, ...response };
}