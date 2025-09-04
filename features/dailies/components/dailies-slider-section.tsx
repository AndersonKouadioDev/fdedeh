"use client";

import React, {useState} from 'react';
import SectionTitle from "@/components/section-title";
import Slider from "@/features/dailies/components/slider";
import {Link} from "@/i18n/navigation";
import {ChevronRight} from "lucide-react";
import {IDaily} from "@/features/dailies/types";
import {useDailyStore} from "@/features/dailies/store/dailiesStore";
import LoadingIndicator from "@/components/loading-indicator";
import {getDailyImages} from "@/features/dailies/utils/images";

function DailiesSliderSection() {
	const today = new Date().toISOString().split('T')[0];
	const [selectedDate, setSelectedDate] = useState<string>(today);

	const {isLoading, isFetching, getDailyByDate} = useDailyStore();

	if (isLoading || isFetching) {
		return <LoadingIndicator/>;
	}

	// Filtrage par date si une date est sélectionnée
	const daily = getDailyByDate(today);

	if (!daily) {
		return <div className="mb-10">
			<SectionTitle text="A Barthelemy Zouzoua Inabo" className="mb-4"/>
			<p className="text-center text-gray-500">Aucun daily disponible pour aujourd&#39;hui.</p>
		</div>;
	}
	return (
		<div className="mb-5">
			<SectionTitle text="A Barthelemy Zouzoua Inabo" className="mb-4"/>
			<Slider
				images={getDailyImages(daily || {} as IDaily)}
			/>
			<div className="relative min-h-72 mt-8">
				<div
					className="absolute -top-14 md:-top-20 bg-white rounded-xl w-full max-w-screen-lg left-1/2 transform -translate-x-1/2 py-5 lg:py-8 px-5 lg:px-10 shadow h-72 overflow-hidden"
				>
					<div className="flex items-center justify-between mb-5">
						<input
							type="date"
							value={selectedDate}
							onChange={(e) => setSelectedDate(e.target.value)}
							max={today}
							className="rounded-full border py-2 px-4 text-sm md:w-56"
						/>
						<Link href={`/dailies/${daily.id}`} className="text-[#FF7710] flex items-center gap-2 hover:underline text-sm md:text-base">
							<span>Lire la suite</span> <ChevronRight className="size-4"/>
						</Link>
					</div>
					<article className="text-justify text-sm pt-4">
						<div dangerouslySetInnerHTML={{__html: daily.introduction}}/>
					</article>
					<div className="absolute h-16 bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent"/>
				</div>
			</div>
		</div>
	);
}

export default DailiesSliderSection;