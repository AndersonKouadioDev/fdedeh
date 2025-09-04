import { useQuery, useQueryClient } from '@tanstack/react-query';
import { flashApi } from '@/features/infos-flash/flash.api';
import { PaginatedResponse } from '@/types';
import { IFlash } from '@/features/infos-flash/flash.type';

// 1- Clé de cache pour les exclusivités
export const exclusivitiesKeyQuery = (...params: any[]) => {
	if (params.length === 0) {
		return ['exclusivities'];
	}
	return ['exclusivities', ...params];
};

// 2- Hook pour récupérer les exclusivités
export const useExclusivitiesQuery = () => {
	return useQuery<PaginatedResponse<IFlash>>({
		queryKey: exclusivitiesKeyQuery(),
		queryFn: () => flashApi.obtenirToutesExclusivites(),
	});
};

// 3- Hook personnalisé pour l'invalidation des exclusivités
export const useInvalidateExclusivitiesQuery = () => {
	const queryClient = useQueryClient();

	return async (...params: any[]) => {
		await queryClient.invalidateQueries({
			queryKey: exclusivitiesKeyQuery(...params),
			exact: false,
		});
	};
};
