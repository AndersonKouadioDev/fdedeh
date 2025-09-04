import {create} from 'zustand';
import {IArticle, IArticleParams} from "@/features/articles/types/article.type";
import {slugify} from "@/features/articles/utils/slugify";

interface ArticleStoreState {
	allArticles: IArticle[];

	// react query
	isLoading: boolean;
	isError: boolean;
	error: any | null;
	isFetching: boolean;

	setAllArticles: (articles: IArticle[]) => void;
	setQueryState: (state: { isLoading: boolean, isError: boolean, error: any, isFetching: boolean }) => void;

	// Utilitaires pour calculer les articles filtrés
	getFilteredArticles: (filters: IArticleParams) => IArticle[];
	getArticleBySlug: (slug: string) => IArticle | undefined;
}

export const useArticleStore = create<ArticleStoreState>((set, getState) => ({
	allArticles: [],
	isLoading: false,
	isError: false,
	error: null,
	isFetching: false,

	setAllArticles: (articles: IArticle[]) => set({allArticles: articles}),
	setQueryState: (state) => set(state),

	// Utilitaires pour calculer les articles filtrés
	getFilteredArticles: (filters: IArticleParams) => {
		return getState().allArticles
			.filter(article => {
				if (filters.category && slugify(article.category.name) !== slugify(filters.category)) {
					return false;
				}
				if (filters.created_at) {
					const filterDate = new Date(filters.created_at);
					const articleDate = new Date(article.created_at);
					if (articleDate.toDateString() !== filterDate.toDateString()) {
						return false;
					}
				}
				return true;
			})
			.slice(filters.skip || 0, (filters.limit ? (filters.skip || 0) + filters.limit : undefined));
	},
	getArticleBySlug: (slug: string) => {
		return getState().allArticles.find(article => slugify(article.title) === slug);
	},
}));