import React from 'react';

function SkeletonArticleHorizontal() {
	return (
		<article
			className="bg-white grid grid-cols-[minmax(100px,40%),1fr] gap-4 items-stretch h-full transition transform duration-200">
			<div className="relative min-h-[120px] overflow-hidden rounded-xl bg-gray-300 animate-pulse">
				<div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
				<div
					className="inline-flex items-center border font-semibold rounded-2xl p-2 text-xs bg-gray-300 animate-pulse absolute top-2 left-2"></div>
			</div>
			<div className="">
				<h4 className="text-sm bg-gray-300 animate-pulse rounded mb-2.5 h-4 w-3/4"></h4>
				<time className="bg-gray-300 animate-pulse rounded h-4 w-1/4"></time>
			</div>
		</article>
	);
}

export default SkeletonArticleHorizontal;