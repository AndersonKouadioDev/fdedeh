import React from 'react';
import {CarouselApi} from "@/components/ui/carousel";
import Slider from "@/features/dailies/components/slider";
import {getDailyImages} from "@/features/dailies/utils/images";
import {IDaily} from "@/features/dailies/types";
import {cn} from "@/lib/utils";

function DailyCarouselWithPagination({daily}: { daily: IDaily }) {
	const [api, setApi] = React.useState<CarouselApi>()
	const [current, setCurrent] = React.useState(0)
	const [count, setCount] = React.useState(0)
	React.useEffect(() => {
		if (!api) {
			return
		}
		setCount(api.scrollSnapList().length)
		setCurrent(api.selectedScrollSnap() + 1)
		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1)
		})
	}, [api])

	const images = getDailyImages(daily || {} as IDaily);

	return (
		<>
			<Slider
				setApi={setApi}
				className="h-[400px] md:h-[500px]"
				images={images}
			/>
			<div className="-mt-8 flex items-center justify-center gap-2">
				{images?.map((_, index) => (
					<button
						key={index}
						onClick={() => api?.scrollTo(index)}
						className={cn("size-2.5 rounded-full z-10 bg-white/50", {
							"bg-white": current === index + 1,
						})}
					/>
				))}
			</div>
		</>
	);
}

export default DailyCarouselWithPagination;