import React from 'react';
import ArticleDetails from "@/features/articles/components/article/article-details";

async function ArticleDetailPage({params}: { params: Promise<{ id: string }> }) {
	const {id} = await params;

	return (
		<ArticleDetails slug={id}/>
	);
}

export default ArticleDetailPage;