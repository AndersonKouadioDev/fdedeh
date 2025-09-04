import React from "react";
import {useQuery} from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";
import {questionsKeyQuery} from "@/features/question/queries/index.query";
import {obtenirToutesQuestionsAction} from "@/features/question/question.action";

const queryClient = getQueryClient();

// 1- Option de requête optimisée
export const questionListQueryOption = () => ({
	queryKey: questionsKeyQuery("list"),
	queryFn: async () => {
		const result = await obtenirToutesQuestionsAction();
		if (!result.success) {
			throw new Error("Erreur lors de la récupération des questions");
		}
		return result.data!;
	},
	placeholderData: (previousData: any) => previousData,
	staleTime: 30 * 1000,
	refetchOnWindowFocus: false,
	refetchOnMount: true,
});

export const useQuestionListQuery = () => {
	const query = useQuery(questionListQueryOption());

	// Gestion des erreurs dans le hook
	React.useEffect(() => {
		if (query.isError && query.error) {
			console.error("Erreur lors de la récupération des questions:", query.error);
		}
	}, [query]);

	return query;
};

// Fonction pour précharger les questions appelée dans les pages
export const prefetchQuestionListQuery = () => {
	return queryClient.prefetchQuery(questionListQueryOption());
};