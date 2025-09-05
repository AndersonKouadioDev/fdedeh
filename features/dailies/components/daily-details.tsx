"use client";
import React, {useEffect, useState} from 'react'; // Import useState and useEffect
import {useDailyStore} from "@/features/dailies/store/dailiesStore";
import SectionTitle from "@/components/section-title";
import {IDailyContent} from "@/features/dailies/types";
import LoadingIndicator from "@/components/loading-indicator";
import DailyCarouselWithPagination from "@/features/dailies/components/carousel/daily-carousel-with-pagination";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import SocialShare from "@/features/articles/components/social-share";

const colors = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-red-100 text-red-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
];

function DailyDetails({dailyId}: { dailyId: string }) {
    const {getDailyById, isLoading, isFetching} = useDailyStore();

    const daily = getDailyById(dailyId);
    const [, setSelectedDate] = useState<string | null>(null);

    useEffect(() => {
        if (daily && daily.published_at) {
            setSelectedDate(new Date(daily.published_at).toISOString().split('T')[0]);
        }
    }, [daily]);

    if (isLoading || isFetching) {
        return <LoadingIndicator/>;
    }

    if (!daily) {
        return (
            <div className="mb-10">
                <p className="text-center text-gray-500">Aucun daily disponible.</p>
            </div>
        );
    }

    return (
        <article>
            <SectionTitle text="A Barthelemy Zouzoua Inabo" className="my-6"/>
            <DailyCarouselWithPagination
                daily={daily}
            />
            <div className="flex flex-wrap gap-10 mt-12">
                <div>
                    <input
                        type="date"
                        className="mb-4 p-2 border border-gray-300 rounded-full w-full min-w-64"
                        placeholder="selectionner une date"
                        value={selectedDate || ''}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        max={new Date().toISOString().split('T')[0]}
                    />
                </div>
                <div className="prose flex-1 space-y-8">
                    <p
                        className="text-justify text-pretty"
                    >
                        {daily.introduction}
                    </p>
                    {daily.contents.map((content: IDailyContent, index: number) => {
                        return (
                            <div className="text-justify" key={index}>
                                <Badge className={cn("mb-3 text-base", colors[index % colors.length])}>
                                    {content.hashtag.hashtag}
                                </Badge>
                                <div dangerouslySetInnerHTML={{__html: content.body}}></div>
                            </div>
                        );
                    })}
                    <SocialShare/>
                </div>
            </div>
        </article>
    );
}

export default DailyDetails;