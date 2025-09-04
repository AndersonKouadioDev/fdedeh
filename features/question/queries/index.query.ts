import { useQuery, useQueryClient } from '@tanstack/react-query';
import { questionApi } from '@/features/question/question.api';
import { PaginatedResponse } from '@/types';
import { IQuestion } from '@/features/question/question.type';

// 1- Clé de cache pour les questions
export const questionsKeyQuery = (...params: any[]) => {
	if (params.length === 0) {
		return ['questions'];
	}
	return ['questions', ...params];
};

// 2- Hook pour récupérer les questions
export const useQuestionsQuery = () => {
	return useQuery<PaginatedResponse<IQuestion>>({
		queryKey: questionsKeyQuery(),
		queryFn: () => questionApi.obtenirToutesQuestions(),
	});
};

// 3- Hook personnalisé pour l'invalidation des questions
export const useInvalidateQuestionsQuery = () => {
	const queryClient = useQueryClient();

	return async (...params: any[]) => {
		await queryClient.invalidateQueries({
			queryKey: questionsKeyQuery(...params),
			exact: false,
		});
	};
};