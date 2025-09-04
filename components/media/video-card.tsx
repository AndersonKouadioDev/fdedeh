"use client";

import React, {useState} from "react";
import {dateFormat} from "@/utils/date-format";
import Image from "next/image";
import {CirclePlay} from "lucide-react";
import VideoModal from "@/components/media/video-modal";

export interface IVideo {
    id: string;
    title: string;
    publishedAt: string;
    url: string;
    thumbnailUrl: string;
}

function VideoCard({video}: { video: IVideo }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <div
                className="group flex flex-col cursor-pointer"
                onClick={openModal}
            >
                <article>
                    <div className="relative h-48 overflow-hidden rounded-xl">
                        <Image
                            src={video.thumbnailUrl}
                            alt={video.title}
                            fill
                            className="object-cover"
                        />

                        <CirclePlay
                            className="absolute top-1/2 left-1/2 w-10 h-10 text-black bg-white rounded-full p-2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300"
                            aria-hidden="true"
                        />
                    </div>
                    <h4
                        className="mt-4 text-sm text-gray-800 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2 mb-2.5"
                    >
                        {video.title}
                    </h4>
                    <time className="text-[#595959]">
                        {dateFormat(video.publishedAt)}
                    </time>
                </article>
            </div>
            <VideoModal video={video} open={isModalOpen} openChange={setIsModalOpen}/>
        </>
    );
}

export default VideoCard;