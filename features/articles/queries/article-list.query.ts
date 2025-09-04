import React from 'react';

import {useQuery,} from '@tanstack/react-query';
import getQueryClient from "@/lib/get-query-client";
import {IArticleParams} from "@/features/articles/types/article.type";
import {articlesKeyQuery} from "@/features/articles/queries/index.query";
import {obtenirTousArticlesAction} from '../actions/article.action';

const queryClient = getQueryClient();

//1- Option de requête optimisée
export const articleListQueryOption = (articleParamsDTO: IArticleParams) => {
	return {
		queryKey: articlesKeyQuery("list", articleParamsDTO),
		queryFn: async () => {
			const result = await obtenirTousArticlesAction(articleParamsDTO)

			if (!result.success) {
				throw new Error("Erreur lors de la récupération des articles");
			}
			return result.data!;
		},
		placeholderData: (previousData: any) => previousData,
		staleTime: 30 * 1000,//30 secondes
		refetchOnWindowFocus: false,//Ne pas refetch lors du focus de la fenetre
		refetchOnMount: true,//Refetch lors du mount
	};
};

//2- Hook pour récupérer les articles
export const useArticleListQuery = (
	articleParamsDTO: IArticleParams
) => {
	const query = useQuery(articleListQueryOption(articleParamsDTO));

	// Gestion des erreurs dans le hook
	React.useEffect(() => {
		if (query.isError && query.error) {
			console.error("Erreur lors de la récupération des articles:", query.error);
		}
	}, [query]);

	return query;
};

//3- Fonction pour précharger les articles appelée dans les pages
export const prefetchArticleListQuery = (
	articleParamsDTO: IArticleParams
) => {
	return queryClient.prefetchQuery(articleListQueryOption(articleParamsDTO));
}
