import {useQueryClient} from '@tanstack/react-query';

// 1- Clé de cache
export const articlesKeyQuery = (...params: any[]) => {
		if (params.length === 0) {
				return ['articles'];
		}
		return ['articles', ...params];
};

// 2. Créez un hook personnalisé pour l'invalidation
export const useInvalidateArticlesQuery = () => {
		const queryClient = useQueryClient();

		return async (...params: any[]) => {
				await queryClient.invalidateQueries({
						queryKey: articlesKeyQuery(...params),
						exact: false
				});

				await queryClient.refetchQueries({
						queryKey: articlesKeyQuery(),
						type: 'active'
				});
		};
};