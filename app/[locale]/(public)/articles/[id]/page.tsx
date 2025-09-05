import React from 'react';
import ArticleDetails from "@/features/articles/components/article/article-details";

type Props = {
    params: Promise<{ id: string }>
}

async function ArticleDetailPage({params}: Props) {
	const {id} = await params;

	return (
		<ArticleDetails slug={id}/>
	);
}

export default ArticleDetailPage;