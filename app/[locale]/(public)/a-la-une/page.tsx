"use client";
import React from 'react';
import {useArticleStore} from "@/features/articles/stores/article.store";
import NewsCard from "@/components/news/news-card";
import PageTitle from "@/components/blocks/page-title";

function ALaUnePage() {
	const {allArticles} = useArticleStore();

	return (
		<div className="page-container">
			<PageTitle
				title="À la une"
			/>
			<div className="grid-article-screen">
				{allArticles.map((article) => (
					<NewsCard news={article} key={"article-" + article.id}/>
				))}
			</div>
		</div>
	);
}

export default ALaUnePage;