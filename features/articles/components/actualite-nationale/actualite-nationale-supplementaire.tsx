"use client";

import React from 'react';
import NewsCard from "@/components/news/news-card";
import Publicite from "@/components/publicite";
import SkeletonArticleHorizontal from "@/features/articles/components/skeleton-article-horizontal";
import {useArticleStore} from "@/features/articles/stores/article.store";

function ActualiteNationaleSupplementaire({category}: { category: string }) {
	// const {data, isLoading, isFetching} = useArticleListQuery({
	// 	category,
	// 	limit: 1,
	// 	page: 1,
	// });
	// const newsList = data?.data || []

	const {getFilteredArticles, isLoading, isError, isFetching} = useArticleStore();

	const newsList = getFilteredArticles({category, skip:3}) || []

	const showLoading = isLoading || isFetching;

	if (newsList.length === 0 && !showLoading) {
		if (isError) {
			return <div className="text-red-500">Error loading articles.</div>;
		}
		return null;
	}
	return (
		<section className="mt-12 grid grid-cols-[1fr,minmax(100px,30%)] gap-8">
			<div className="grid grid-rows-6 gap-6">
				{!showLoading ? newsList.map((item) => (
					<div key={item.id} className="min-h-52">
						<NewsCard news={item} orientation="horizontal" important/>
					</div>
				)) : Array.from({length:6}).map((_, index) => (
					<div key={index} className="min-h-52">
						<SkeletonArticleHorizontal/>
					</div>
				))}
			</div>
			<div className="grid grid-rows-2 gap-8">
				<Publicite bannerPosition="SIDEBAR_RIGHT"/>
				<Publicite bannerPosition="SIDEBAR_RIGHT"/>
			</div>
		</section>
	);
}

export default ActualiteNationaleSupplementaire;