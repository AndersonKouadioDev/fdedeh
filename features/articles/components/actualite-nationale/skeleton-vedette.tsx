import React from 'react';

function SkeletonVedette() {
	return (
		<>
			<div className="bg-white mt-6 grid grid-cols-1 grid-rows-12 md:grid-cols-6 gap-6 overflow-hidden">
				<div className="space-y-3 md:col-span-3 row-span-12">
					<a className="group block h-full" href="#">
						<article className="grid grid-cols-1 gap-4 items-stretch h-full transition transform duration-200">
							<div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-300 animate-pulse"></div>
							<div className="mt-4">
								<h4 className="bg-gray-300 animate-pulse h-6 rounded mb-2.5"></h4>
								<time className="bg-gray-300 animate-pulse h-4 rounded"></time>
							</div>
						</article>
					</a>
				</div>
				<div className="md:col-span-3 space-y-6 grid grid-rows-2 row-span-9">
					<div>
						<a className="group block h-full" href="#">
							<article
								className="grid grid-cols-[minmax(100px,40%),1fr] gap-4 items-stretch h-full transition transform duration-200">
								<div className="relative min-h-[120px] overflow-hidden rounded-xl bg-gray-300 animate-pulse"></div>
								<div className="">
									<h4 className="bg-gray-300 animate-pulse h-6 rounded mb-2.5"></h4>
									<time className="bg-gray-300 animate-pulse h-4 rounded"></time>
								</div>
							</article>
						</a>
					</div>
					<div>
						<a className="group block h-full" href="#">
							<article
								className="grid grid-cols-[minmax(100px,40%),1fr] gap-4 items-stretch h-full transition transform duration-200">
								<div className="relative min-h-[120px] overflow-hidden rounded-xl bg-gray-300 animate-pulse"></div>
								<div className="">
									<h4 className="bg-gray-300 animate-pulse h-6 rounded mb-2.5"></h4>
									<time className="bg-gray-300 animate-pulse h-4 rounded"></time>
								</div>
							</article>
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default SkeletonVedette;