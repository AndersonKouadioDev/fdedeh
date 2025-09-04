import React from 'react';
import SectionTitle from "@/components/section-title";
import {Link} from "@/i18n/navigation";
import {videosList} from "@/app/api/videos";
import VideoCard from "@/components/media/video-card";

function VideosSection() {
    return (
        <section className="mt-14">
            <div className="flex items-center mb-8">
                <SectionTitle text="Videos"/>
                <Link
                    href={`/videos`}
                    className="ml-auto text-[#FF8D28] hover:underline uppercase"
                >
                    Voir tout
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {videosList.slice(2).map(video => (
                    <VideoCard key={video.id} video={video}/>
                ))}
            </div>
        </section>
    );
}

export default VideosSection;