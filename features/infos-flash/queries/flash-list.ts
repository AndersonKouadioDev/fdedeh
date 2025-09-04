import React from "react";
import {useQuery} from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import {exclusivitiesKeyQuery} from "@/features/infos-flash/queries/index.query";
import {obtenirToutesExclusivitesAction} from "@/features/infos-flash/flash.action";

const queryClient = getQueryClient();

// 1- Option de requête optimisée
export const exclusivityListQueryOption = () => ({
	queryKey: exclusivitiesKeyQuery("list"),
	queryFn: async () => {
		const result = await obtenirToutesExclusivitesAction();
		if (!result.success) {
			throw new Error("Erreur lors de la récupération des exclusivités");
		}
		return result.data!;
	},
	placeholderData: (previousData: any) => previousData,
	staleTime: 30 * 1000,
	refetchOnWindowFocus: false,
	refetchOnMount: true,
});

export const useExclusivityListQuery = () => {
	const query = useQuery(exclusivityListQueryOption());

	// Gestion des erreurs dans le hook
	React.useEffect(() => {
		if (query.isError && query.error) {
			console.error("Erreur lors de la récupération des exclusivités:", query.error);
		}
	}, [query]);

	return query;
};

// Fonction pour précharger les exclusivités appelée dans les pages
export const prefetchExclusivityListQuery = () => {
	return queryClient.prefetchQuery(exclusivityListQueryOption());
};
