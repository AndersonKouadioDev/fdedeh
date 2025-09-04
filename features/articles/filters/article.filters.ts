import {parseAsInteger, parseAsString, parseAsStringEnum} from 'nuqs';
import {ArticleType} from '@/features/articles/types/article.type';
import {getEnumValues} from '@/utils/getEnumValues';

/**
 * @constant articleFiltersClient
 * @description Définit les schémas de parsing pour les paramètres de requête d'URL
 * utilisés pour filtrer et paginer la liste des articles.
 * Chaque propriété correspond à un paramètre d'URL et spécifie son type
 * et sa valeur par défaut.
 */
export const articleFiltersClient = {
	filters: {
		type: parseAsStringEnum<ArticleType>(getEnumValues(ArticleType)).withDefault(ArticleType.ARTICLE),
		title: parseAsString.withDefault(''),
		category_id: parseAsString.withDefault(''),
		created_by: parseAsString.withDefault(''),
		status: parseAsString.withDefault(''),
		page: parseAsInteger.withDefault(1),
		limit: parseAsInteger.withDefault(10),
	},
	options: {
		clearOnDefault: true,
		throttleMs: 500, // 500ms de délai pour les filtres textuels
	}
}