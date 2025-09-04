import React, {Suspense} from 'react';
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {IVideo} from "@/components/media/video-card";
import {dateFormat} from "@/utils/date-format";


// Define the interface for the video modal props
export interface VideoModalProps {
    video: IVideo;
    open: boolean;
    openChange: (value: boolean) => void;
}

function VideoModal(props: VideoModalProps) {
    return (
        <Dialog open={props.open} onOpenChange={(open) => props.openChange(open)}>
            <DialogContent className="max-w-screen-lg w-full aspect-video p-6">
                <DialogHeader>
                    <DialogTitle>
                        {props.video.title}
                    </DialogTitle>
                </DialogHeader>
                <div className="relative w-full aspect-video">
                    <Suspense fallback={<div>Loading...</div>}>
                        <video className="w-full aspect-video" controls>
                            <source src={props.video.url} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </Suspense>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                    Publié le {dateFormat(props.video.publishedAt)}
                </p>
            </DialogContent>
        </Dialog>
    );
}

export default VideoModal;