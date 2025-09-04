import React from 'react';

function SkeletonCard() {
	return (
		<article className="bg-white grid grid-cols-1 gap-4 items-stretch h-full transition transform duration-200"
		         aria-busy="true" aria-live="polite"
		>
			<div className="relative aspect-video w-full overflow-hidden rounded-xl">
				<div className="animate-pulse bg-gray-300 absolute inset-0 rounded-xl"></div>
				<div
					className="animate-pulse inline-flex items-center border border-transparent text-white rounded-2xl p-2 text-xs bg-gray-300 absolute top-2 left-2">
					<span className="w-16 h-4 bg-gray-400 rounded"></span>
				</div>
			</div>
			<div className="mt-4">
				<h4 className="animate-pulse bg-gray-300 h-6 w-3/4 rounded mb-2.5"></h4>
				<time className="animate-pulse bg-gray-300 h-4 w-1/4 rounded"></time>
			</div>
		</article>
	);
}

export default SkeletonCard;