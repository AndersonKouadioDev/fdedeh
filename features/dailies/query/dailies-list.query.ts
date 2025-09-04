import React from 'react';

import {useQuery,} from '@tanstack/react-query';
import getQueryClient from "@/lib/get-query-client";
import {dailiesKeyQuery} from "@/features/dailies/query/index.query";
import {obtenirTousDailiesAction} from "@/features/dailies/dailies.action";

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const dailyListQueryOption = () => {
	return {
		queryKey: dailiesKeyQuery("list"),
		queryFn: async () => {
			const result = await obtenirTousDailiesAction();

			if (!result.success) {
				throw new Error("Erreur lors de la récupération des dailies");
			}
			return result.data!;
		},
		placeholderData: (previousData: any) => previousData,
		staleTime: 30 * 1000,//30 secondes
		refetchOnWindowFocus: false,//Ne pas refetch lors du focus de la fenetre
		refetchOnMount: true,//Refetch lors du mount
	};
};

//2- Hook pour récupérer les dailies
export const useDailyListQuery = () => {
	const query = useQuery(dailyListQueryOption());

	// Gestion des erreurs dans le hook
	React.useEffect(() => {
		if (query.isError && query.error) {
			console.error("Erreur lors de la récupération des dailies:", query.error);
		}
	}, [query]);

	return query;
};

//3- Fonction pour précharger les dailies appelée dans les pages
export const prefetchDailyListQuery = () => {
	return queryClient.prefetchQuery(dailyListQueryOption());
}
