"use client";
import React from 'react';
import {useArticleStore} from "@/features/articles/stores/article.store";
import NewsCard from "@/components/news/news-card";
import PageTitle from "@/components/blocks/page-title";

function ALaUnePage() {
	const {getFilteredArticles} = useArticleStore();
	// Récupérer les articles de la catégorie "sport"
	const articles = getFilteredArticles({category: 'sport'});

	return (
			<div className="page-container">
				<PageTitle
					title="Sports"
				/>
				<div className="grid-article-screen">
					{articles.map((article) => (
						<NewsCard news={article} key={"article-" + article.id}/>
					))}
				</div>
			</div>
	);
}

export default ALaUnePage;