import {IArticleParams} from "@/features/articles/types/article.type";
import {useArticleListQuery} from "@/features/articles/queries/article-list.query";
import {useMemo, useState} from "react";

interface UseArticleOptions {
	pageParDefaut?: number;
	taillePageParDefaut?: number;
}

export function UseArticle (
	paramsBase: Omit<IArticleParams, 'page' | 'limit'>,
	options: UseArticleOptions = {}
) {
	// État pour gérer la pagination
	const [pageCourante, setPageCourante] = useState(options.pageParDefaut || 1);
	const [taillePage, setTaillePage] = useState(options.taillePageParDefaut || 10);

	// Construction des paramètres complets
	const articleParams: IArticleParams = useMemo(() => ({
		...paramsBase,
		page: pageCourante,
		limit: taillePage,
	}), [paramsBase, pageCourante, taillePage]);

	// Utilisation du hook existant
	const query = useArticleListQuery(articleParams);

}