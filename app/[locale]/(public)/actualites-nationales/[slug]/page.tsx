import React from 'react';
import PageTitle from "@/components/blocks/page-title";
import SectionTitle from "@/components/section-title";
import ActualitesNationaleVedette
	from "@/features/articles/components/actualite-nationale/actualites-nationale-vedette";
import ActualiteNationaleSupplementaire
	from "@/features/articles/components/actualite-nationale/actualite-nationale-supplementaire";
import {prefetchArticleListQuery} from "@/features/articles/queries/article-list.query";

async function ActualiteNationalePage({params}: { params: Promise<{ slug: string }> }) {
	const {slug} = await params;
	await Promise.all([
		prefetchArticleListQuery({
			category: slug,
			limit: 4,
			page: 1,
		}),
		prefetchArticleListQuery({
			category: slug,
			limit: 1,
			page: 1,
		})
	]);
	return (
		<div className="page-container">
			<PageTitle title={`Actualités nationales`}/>
			<section className="mt-6">
				<SectionTitle
					text={slug}
					className="lg:w-1/2"
				/>
				<ActualitesNationaleVedette category={slug}/>
			</section>
			<ActualiteNationaleSupplementaire category={slug}/>
		</div>
	);
}

export default ActualiteNationalePage;