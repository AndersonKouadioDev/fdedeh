"use client";
import React from 'react';
import NewsCard from "@/components/news/news-card";
import SkeletonVedette from "@/features/articles/components/actualite-nationale/skeleton-vedette";
import {useArticleStore} from "@/features/articles/stores/article.store";

function ActualitesNationaleVedette({category}: { category: string }) {
	// const {data, isError, isFetching, isLoading} = useArticleListQuery({
	// 	category,
	// 	limit: 3,
	// 	page: 1,
	// });

	const {getFilteredArticles, isLoading, isError, isFetching} = useArticleStore();

	const newsList = getFilteredArticles({category}) || []

	if (isLoading || isFetching) {
		return <SkeletonVedette/>;
	}

	if (isError) {
		return <div>Error loading news.</div>;
	}

	if (newsList.length === 0) {
		return (<div className="max-w-screen-sm mx-auto text-center text-gray-500 py-8">
			Malheureusement, il n&#39;y a pas encore d&#39;articles dans cette catégorie.
			Revenez nous voir bientôt pour découvrir les dernières actualités !
		</div>);
	}

	return (
		<div className="mt-6 grid grid-cols-1 grid-rows-12 md:grid-cols-6 gap-6 overflow-hidden">
			<div className="space-y-3 md:col-span-3 row-span-12">
				<NewsCard news={newsList[0]} highlighted />
			</div>

			<div className="md:col-span-3 space-y-6 grid grid-rows-2 row-span-9">
				{newsList.slice(1,3).map((item) => (
					<div key={item.id}>
						<NewsCard
							important
							news={item}
							orientation="horizontal"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default ActualitesNationaleVedette;