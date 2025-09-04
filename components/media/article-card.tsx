import React, {PropsWithChildren} from 'react';
import {Link} from "@/i18n/navigation";
import {dateFormat} from "@/utils/date-format";
import {cn} from "@/lib/utils";

export interface IMedia {
    title: string;
    url: string;
    createdAt: string;
}

export type MediaCardProps = {
    orientation?: 'vertical' | 'horizontal';
    highlighted?: boolean;
    important?: boolean;
}

function ArticleCard({media, children, highlighted,important ,orientation = 'vertical'}: PropsWithChildren<{
    media: IMedia
} & MediaCardProps>) {
    return (
        <Link
            href={media.url}
            className="group block h-full"
        >
            <article className={`grid ${
                orientation === 'horizontal'
                    ? 'grid-cols-[minmax(100px,40%),1fr]'
                    : 'grid-cols-1'
            } gap-4 items-stretch h-full transition transform duration-200`}>
                <div
                    className={`relative ${orientation === 'vertical' ? 'aspect-video w-full' : 'min-h-[120px]'} overflow-hidden rounded-xl`}>
                    {children}
                </div>
                <div className={orientation === 'vertical' ? 'mt-4' : ''}>
                    <h4 className={cn("text-sm text-gray-800 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2 mb-2.5", {
                        'font-bold':important,
                        'font-extrabold text-lg': highlighted,
                    })}>
                        {media.title}
                    </h4>
                    <time className="text-[#595959]">
                        {dateFormat(media.createdAt)}
                    </time>
                </div>
            </article>
        </Link>
    );
}

export default ArticleCard;