import React from 'react';
import {
	Carousel,
	type CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";
import {cn} from "@/lib/utils";

type CarouselProps = {
	images: string[];
	className?: string;
} & React.HTMLAttributes<HTMLDivElement> & { setApi?: (api: CarouselApi) => void };

function Slider({images, className, ...props}: CarouselProps) {
	return (
		<Carousel setApi={props.setApi} className="w-full">
			<CarouselContent>
				{images.map((image, index) => (
					<CarouselItem key={index}>
						<div className={cn("w-full h-64 md:h-96 relative", className)}>
							<Image
								src={image}
								alt={`Slide ${index + 1}`}
								fill
								className="rounded-xl object-cover object-center"
								priority
							/>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="max-md:hidden text-gray-950" />
			<CarouselNext className="max-md:hidden text-gray-950" />
		</Carousel>
	);
}

export default Slider;