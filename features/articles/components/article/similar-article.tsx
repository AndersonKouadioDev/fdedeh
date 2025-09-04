"use client";
import React from 'react';
import NewsCard from "@/components/news/news-card";
import SkeletonArticleHorizontal from "@/features/articles/components/skeleton-article-horizontal";
import {useArticleStore} from "@/features/articles/stores/article.store";

function SimilarArticle() {
	const {getFilteredArticles, isLoading, isFetching, isError,error, allArticles} = useArticleStore();

	const showLoading = isLoading || isFetching;

	if (isError) {
		return <div>Error loading similar articles: {error.message}</div>;
	}

	if (allArticles.length === 0) {
		return <div>No similar articles available.</div>;
	}
	return (
		<div className="grid grid-rows-2 gap-6 mt-6 ">
			{!showLoading ? getFilteredArticles({limit:2}).map((item) => (
				<div key={item.id} className="min-h-44">
					<NewsCard news={item} orientation="horizontal" important/>
				</div>
			)) : Array.from({length: 2}).map((_, index) => (
				<div key={index} className="min-h-44">
					<SkeletonArticleHorizontal/>
				</div>
			))}
		</div>
	);
}

export default SimilarArticle;