"use client";
import React from 'react';
import SectionTitle from "@/components/section-title";
import CarouselWithPagination from "@/components/carousel";
import {newsList} from "@/app/api/news";

function LatestNews() {
	const carouselItems = newsList.slice(0, 4)
		.map((news) => {
			return {
				src: news.imageUrl,
				alt: news.title,
				title: news.title,
				category: news.category
			}
		})
	return (
		<section className="mb-14">
			<SectionTitle text={"Dernieres nouvelles"} className="mb-8"/>
			<CarouselWithPagination
				caourselItems={carouselItems}
			/>
		</section>
	);
}

export default LatestNews;